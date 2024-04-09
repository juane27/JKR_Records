from django.urls import path

from . import views

urlpatterns = [
    path('artists/', views.getArtists, name="artists"),
    path('songs/', views.getSongs, name="songs"),
    path('producers/', views.getProducers, name="producers"),
    path('releases/', views.getReleases, name="releases"),
    path('lives/', views.getLives, name="lives"),
    path('teammembers/', views.getTeamMembers, name="teammembers"),




]