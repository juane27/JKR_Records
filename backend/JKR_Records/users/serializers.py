from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework.serializers import ModelSerializer
from .models import User, UserAction
from rest_framework import serializers





User = get_user_model()



class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ["id", "email", "first_name", "last_name", "password"]



class UsersSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'last_login',
            'is_superuser',
            'first_name',
            'last_name',
            'email',
            'jkrpoints',
            'instagram',
            'instagram_verified',
            'youtube',
            'youtube_verified',
            'ig_story',
            'ig_tag',
            'is_staff',
            'is_active',
            'date_joined',
        )


class UserActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAction
        fields = ('accion', 'fecha')        