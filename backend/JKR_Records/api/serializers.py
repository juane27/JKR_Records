from rest_framework.serializers import ModelSerializer
from .models import Artists, Songs, Producers, Releases, Lives, TeamMembers

class ArtistsSerializer(ModelSerializer):
    class Meta:
        model= Artists
        fields = '__all__'  #aca puedo agregar solo un campo como body

class SongsSerializer(ModelSerializer):
    class Meta:
        model= Songs
        fields = '__all__'  #aca puedo agregar solo un campo como body

class ProducersSerializer(ModelSerializer):
    class Meta:
        model= Producers
        fields = '__all__'  #aca puedo agregar solo un campo como body

class ReleasesSerializer(ModelSerializer):
    class Meta:
        model= Releases
        fields = '__all__'  #aca puedo agregar solo un campo como body

class LivesSerializer(ModelSerializer):
    class Meta:
        model= Lives
        fields = '__all__'  #aca puedo agregar solo un campo como body

class TeamMembersSerializer(ModelSerializer):
    class Meta:
        model= TeamMembers
        fields = '__all__'  #aca puedo agregar solo un campo como body