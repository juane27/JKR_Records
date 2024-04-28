from django.urls import path

from . import views



urlpatterns = [
    path('users/', views.getUsers, name="users"),

    path('process-action/<int:action_id>/', views.ProcessActionAPIView.as_view(), name='process-action'),


]