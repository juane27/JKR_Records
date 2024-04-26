from django.shortcuts import render

from rest_framework.response import Response

from rest_framework.decorators import api_view
from django.http import JsonResponse

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Artists, Songs, Producers, Releases, Lives, TeamMembers
from .serializers import ArtistsSerializer, SongsSerializer, ProducersSerializer, ReleasesSerializer, LivesSerializer, TeamMembersSerializer
from django.http import HttpResponse
from pytube import YouTube
import spotipy
import pandas as pd
from spotipy.oauth2 import SpotifyClientCredentials
from bs4 import BeautifulSoup as bs
import requests
from rest_framework import status




# Create your views here.

@api_view(['GET'])
def getArtists(request):
    artists = Artists.objects.all()
    serializer = ArtistsSerializer(artists, many=True) #many es por si son muchos
    return Response(serializer.data)


@api_view(['GET'])
def getArtist_by_id(request, artist_id):
    try:
        artist = Artists.objects.get(id=artist_id)
        serializer = ArtistsSerializer(artist)
        return Response(serializer.data)
    except Artists.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def getSongs(request):
    songs = Songs.objects.all()
    serializer = SongsSerializer(songs, many=True) #many es por si son muchos
    return Response(serializer.data)


@api_view(['GET'])
def getProducers(request):
    producers = Producers.objects.all()
    serializer = ProducersSerializer(producers, many=True) #many es por si son muchos
    return Response(serializer.data)

@api_view(['GET'])
def getProducer_by_id(request, producer_id):
    try:
        producer = Producers.objects.get(id=producer_id)
        serializer = ProducersSerializer(producer)
        return Response(serializer.data)
    except Producers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def getReleases(request):
    releases = Releases.objects.all()
    serializer = ReleasesSerializer(releases, many=True) #many es por si son muchos
    return Response(serializer.data)


@api_view(['GET'])
def getLives(request):
    lives = Lives.objects.all()
    serializer = LivesSerializer(lives, many=True) #many es por si son muchos
    return Response(serializer.data)


@api_view(['GET'])
def getTeamMembers(request):
    teammembers = TeamMembers.objects.all()
    serializer = TeamMembersSerializer(teammembers, many=True) #many es por si son muchos
    return Response(serializer.data)



class ArtistOnlyView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        if request.user.is_artist:
            # Lógica para las vistas accesibles para artistas
            return Response({"message": "Bienvenido, artista!"})
        else:
            return Response({"message": "No tienes permiso para acceder a esta vista."})




###OBTENER VISTAS YOUTUBE###
##LINK VIDEO: "https://www.youtube.com/watch?v=vyQy2-FN8u8&ab_channel=ClubSpace"
##VIDEO ID: vyQy2-FN8u8&
def video_info(request, video_id):
    video_url = f"https://www.youtube.com/watch?v={video_id}"
    yt = YouTube(video_url)
    return HttpResponse(f"Views: {yt.views}")






def song_info(request):
    # Configurar Spotipy
    client_id = 'eeecef1084e542ac908348dbdc41b004'

    client_secret = 'def75379305446bbac98640c6df1dd7c'
    client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager) 

    # Obtener información de la canción
    track_id = 'spotify:track:6ipvBFh31dO2MyKKiACSQD'  # Ejemplo con "Never Gonna Give You Up" de Rick Astley
    track = sp.track(track_id)
    features = sp.audio_features(track_id)[0] if sp.audio_features(track_id) else None

    # Construir una respuesta HTTP
    response_data = {
        'track': track,
        'features': features
    }
    return JsonResponse(response_data)


#6ipvBFh31dO2MyKKiACSQD

def spotify_plays(request, spotify_id):
    spotify_url = f"https://open.spotify.com/track/{spotify_id}"
    url = spotify_url

    # Valor predeterminado para playcount en caso de cualquier error
    playcount = 'No disponible'

    # Hacemos una petición a la página
    response = requests.get(url)

    # Verifica que la petición fue exitosa
    if response.status_code == 200:
        # Creamos el objeto BeautifulSoup
        soup = bs(response.text, 'html.parser')
        
        # Buscamos el elemento por el atributo 'data-testid'
        playcount_span = soup.find('span', attrs={'data-testid': 'playcount'})
        
        # Extraemos el texto
        if playcount_span:
            playcount = playcount_span.text
            print("Número de reproducciones:", playcount)
        else:
            print("Elemento no encontrado")
            playcount = 'No encontrado'
    else:
        print("Error en la petición", response.status_code)
        playcount = 'Error en la petición'

    return HttpResponse(f"Reproducciones: {playcount}")
