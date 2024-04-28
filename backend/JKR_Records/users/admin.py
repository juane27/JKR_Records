from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User, Action, UserAction


# Register your models here.

class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User 
    list_display =["email", "first_name", "last_name","jkrpoints","instagram","instagram_verified", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "jkrpoints","instagram","instagram_verified", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name","jkrpoints","instagram","instagram_verified"]
    fieldsets = (
        (
            _("Login Credentials"), {
                "fields": ("email", "password",)
            }, 
        ),
        (
            _("Personal Information"),
            {
                "fields": ('first_name', 'last_name',)
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
            },
        ),
        (
            _("Important Dates"),
            {
                "fields": ("last_login",)
            },
        ),
                (
            _("Sorteo"),
            {
                "fields": ("jkrpoints","instagram","instagram_verified",)
            },
        ),
    )
    add_fieldsets = (
            (None, {
                "classes": ("wide",),
                "fields": ("email", "first_name", "last_name", "jkrpoints","instagram","instagram_verified", "password1", "password2", "is_staff", "is_active"),
            },),
        )


admin.site.register(User, UserAdmin)

@admin.register(Action)
class ActionAdmin(admin.ModelAdmin):
    list_display = ['actividad', 'jkr_points']
    search_fields = ['actividad']
    
@admin.register(UserAction)
class UserActionAdmin(admin.ModelAdmin):
    list_display = ['usuario', 'accion', 'fecha']
    search_fields = ['usuario__email', 'accion__actividad', 'fecha']