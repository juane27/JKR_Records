from django.shortcuts import render

from rest_framework.response import Response

from rest_framework.decorators import api_view

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .models import Artists, Songs, Producers, Releases, Lives, TeamMembers
from .serializers import ArtistsSerializer, SongsSerializer, ProducersSerializer, ReleasesSerializer, LivesSerializer, TeamMembersSerializer



# Create your views here.

@api_view(['GET'])
def getArtists(request):
    artists = Artists.objects.all()
    serializer = ArtistsSerializer(artists, many=True) #many es por si son muchos
    return Response(serializer.data)


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


