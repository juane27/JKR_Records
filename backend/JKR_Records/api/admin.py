from django.contrib import admin

# Register your models here.
from .models import Artists, Songs, Producers, Releases, Lives, TeamMembers


admin.site.register(Artists,)
admin.site.register(Songs)
admin.site.register(Producers)
admin.site.register(Releases)
admin.site.register(Lives)
admin.site.register(TeamMembers)