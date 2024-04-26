from django.urls import path

from . import views




urlpatterns = [
    path('artists/', views.getArtists, name="artists"),
    path('artist/<int:artist_id>/', views.getArtist_by_id, name="artist"),
    path('songs/', views.getSongs, name="songs"),
    path('producers/', views.getProducers, name="producers"),
    path('producer/<int:producer_id>/', views.getProducer_by_id, name="producer"),
    path('releases/', views.getReleases, name="releases"),
    path('lives/', views.getLives, name="lives"),
    path('teammembers/', views.getTeamMembers, name="teammembers"),
    path('video/<str:video_id>/', views.video_info, name='video_info'),
    path('song-info/', views.song_info, name='song_info'), 
    path('spotify_plays/<str:spotify_id>/', views.spotify_plays, name='spotify_plays'),


]