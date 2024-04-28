from django.shortcuts import render
from .models import User, Action, UserAction
from .serializers import UsersSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated



from django.http import JsonResponse
from rest_framework import status
from django.shortcuts import get_object_or_404



# Create your views here.

@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UsersSerializer(users, many=True) 
    return Response(serializer.data)


class ProcessActionAPIView(APIView):
    
    permission_classes = [IsAuthenticated] 

    def post(self, request, action_id):
        # Supongamos que aquí recuperas la acción realizada por su ID
        action = get_object_or_404(Action, pk=action_id)

        # Obtenemos el usuario autenticado
        user = request.user

        # Asegúrate de que el usuario tenga un atributo 'jkrpoints'
        if hasattr(user, 'jkrpoints'):
            # Aquí puedes continuar con la lógica para sumar puntos al usuario según la acción realizada
            points_earned = action.jkr_points
            
            # Añadir los puntos al usuario
            user.jkrpoints += points_earned
            user.save()

            # Crear una instancia de UserAction para registrar la acción realizada
            UserAction.objects.create(usuario=user, accion=action)

            # Devuelve una respuesta indicando el éxito de la operación
            return Response({'message': 'Puntos añadidos exitosamente.'}, status=status.HTTP_200_OK)
        else:
            # Devuelve una respuesta de error si el usuario no tiene un atributo 'jkrpoints'
            return Response({'message': 'El usuario no tiene atributo jkrpoints.'}, status=status.HTTP_400_BAD_REQUEST)