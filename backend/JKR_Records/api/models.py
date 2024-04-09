from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _


# Create your models here.
class Artists(models.Model):
    nombre = models.CharField(max_length=200, unique=True)
    descripcion = models.TextField()
    foto = models.URLField()
    spotify = models.URLField(blank=True, null=True)
    applemusic = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.nombre[0:50]
    
class Songs(models.Model):
    nombre = models.CharField(max_length=200)
    artista = models.ForeignKey('Artists', on_delete=models.CASCADE)
    feat = models.CharField(max_length=200, blank=True)
    producer = models.CharField(max_length=200)
    foto = models.URLField(blank=True, null=True)
    link_spotify = models.URLField(blank=True, null=True)
    link_youtube = models.URLField(blank=True, null=True)
    link_applemusic = models.URLField(blank=True, null=True)
    reproducciones_spotify = models.PositiveIntegerField(default=0)
    reproducciones_youtube = models.PositiveIntegerField(default=0)
    reproducciones_applemusic = models.PositiveIntegerField(default=0)


    def __str__(self):
        return self.nombre[0:50]
    

class Producers(models.Model):
    nombre = models.CharField(max_length=200, unique=True)
    descripcion = models.TextField()
    foto = models.URLField()
    spotify = models.URLField(blank=True, null=True)
    applemusic = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    


    def __str__(self):
        return self.nombre[0:50]
    
class Releases(models.Model):
    nombre = models.CharField(max_length=200)
    artista = models.ForeignKey('Artists', on_delete=models.CASCADE)
    producer = models.CharField(max_length=200)
    feat = models.CharField(max_length=200, blank=True)
    foto = models.URLField(blank=True, null=True)
    preview = models.URLField(blank=True, null=True)



    def __str__(self):
        return self.nombre[0:50]

class Lives(models.Model):
    titulo = models.CharField(max_length=200)
    subtitulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    foto = models.URLField(blank=True, null=True)
    youtube_link = models.URLField(blank=True, null=True)



    def __str__(self):
        return self.titulo[0:50]
    
class TeamMembers(models.Model):
    nombre = models.CharField(max_length=200)
    cargo = models.CharField(max_length=200)
    descripcion = models.TextField()
    foto = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nombre[0:50]


class CustomUser(AbstractUser):
    # Define un campo para el rol del usuario
    is_artist = models.BooleanField(default=False)
    
    # Añade el argumento related_name a los campos
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name='custom_user_set',  # Cambia 'custom_user_set' por el nombre que prefieras
        related_query_name='user',
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='custom_user_set',  # Cambia 'custom_user_set' por el nombre que prefieras
        related_query_name='user',
    )






