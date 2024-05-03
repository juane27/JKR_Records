from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


# Create your models here.
class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=100)
    last_name = models.CharField(_("Last Name"), max_length=100)
    email = models.EmailField(_("Email Adress"), max_length=254, unique=True)
    jkrpoints = models.IntegerField(_("JKR Points"), default=0)
    instagram =models.CharField(_("Instagram"), max_length=100,unique=True, null=True)
    instagram_verified = models.BooleanField(default=False)
    youtube = models.CharField(_("Youtube"), max_length=100,unique=True, null=True)
    youtube_verified = models.BooleanField(default=False)
    ig_story = models.BooleanField(default=False)
    ig_tag = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
        
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    

class Action(models.Model):
    actividad = models.CharField(max_length=100)
    jkr_points = models.IntegerField(default=0) 

    def __str__(self):
        return self.actividad[0:50]   
    
class UserAction(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    accion = models.ForeignKey(Action, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"Usuario: {self.usuario.email}, Acción: {self.accion.actividad}, Fecha: {self.fecha}"
