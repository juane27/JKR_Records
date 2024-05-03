from django.urls import path

from . import views



urlpatterns = [
    path('users/', views.getUsers, name="users"),

    path('uinfo/', views.getUser, name="user"),

    ##Acciones##
    path('acciones/', views.UserActionList.as_view(), name='user-action-list'),

    path('process-action/<int:action_id>/', views.ProcessActionAPIView.as_view(), name='process-action'),

    path('post-account/', views.PostAccount.as_view() , name='post-account'),


]