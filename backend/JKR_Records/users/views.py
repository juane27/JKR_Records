from django.shortcuts import render
from .models import User, UserAction, Action
from .serializers import UsersSerializer, UserActionSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics




from django.http import JsonResponse
from rest_framework import status
from django.shortcuts import get_object_or_404



#Create your views here.

@api_view(['GET'])
def getUsers(request):
    users = User.objects.filter(is_staff=False)

    serializer = UsersSerializer(users, many=True) 
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
    user = request.user
    serializer = UsersSerializer(user)
    return Response(serializer.data)

##Acciones
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


#Acciones por usuario#       
class UserActionList(APIView):
    permission_classes = [IsAuthenticated]  # Asegura que el usuario esté autenticado

    def get(self, request):
        user_actions = UserAction.objects.filter(usuario=request.user)
        serializer = UserActionSerializer(user_actions, many=True)
        return Response(serializer.data)
    


    

class PostAccount(APIView):
    def post(self, request):
        # Obtener los datos enviados en la solicitud POST
        account_type = request.data.get('account_type')  # 'instagram' o 'youtube'
        account_name = request.data.get('account_name')

        # Validar que se haya proporcionado un tipo de cuenta válido y un nombre de cuenta
        if account_type not in ['instagram', 'youtube'] or not account_name:
            return Response({'error': 'Datos de cuenta no válidos'}, status=status.HTTP_400_BAD_REQUEST)

        # Obtener el usuario actual (puedes ajustar esta lógica según tus requerimientos)
        user = request.user

        # Actualizar el modelo User según el tipo de cuenta
        if account_type == 'instagram':
            user.instagram = account_name
            user.instagram_verified = False  # Puedes establecer esto en True si tienes un mecanismo de verificación
        else:
            user.youtube = account_name
            user.youtube_verified = False  # Puedes establecer esto en True si tienes un mecanismo de verificación

        # Guardar los cambios en la base de datos
        user.save()

        return Response({'success': f'Cuenta de {account_type} actualizada correctamente'}, status=status.HTTP_200_OK)