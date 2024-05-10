# JKR_Records

## Docker

### 1. Correr el proyecto
Siempre en el mismo directorio del archivo *docker-compose.yml*
**$** `docker-compose up`

### 2. Correr la línea de comandos dentro del contenedor

**$** `docker exec -i -t [nombre_container] bash`

Nos va a devolver a nuestra consola, una consola dentro del contenedor de software.


Una vez dentro ejecutamos el comando:

**$** `cd /...ubicacion de la app` 

### 3. Iniciar el servidor
(Siempre dentro de nuestro contenedor de software - Comando N°2)  
Tenemos que ir a la carpeta donde se encuentra el archivo *manage.py*  

**$** `python manage.py runserver 0.0.0.0:8000` 

### 4. Ejecutar los siguientes comandos para realizar la primera migración:  

**$** `python manage.py makemigrations`

**$** `python manage.py migrate` 

### 5. Creamos un super usuario:  

**$** `python manage.py createsuperuser`

### 6. Detener la ejecución de nuestro contenedor y nuestro servidor
Tenemos que estar en la terminal que nos muestra los mensajes del servidor, tomada por el contenedor.
Tan solo con el comando `ctrl + c`  se detiene la ejecución de nuestro contenedor.  

Una forma alternativa es con el siguiente comando en la terminal del host:

**$** `docker stop [nombre_container]`  

O también puede ser con docker-compose:
Tenemos que estar en la carpeta que contiene el archivo *docker-compose.yml* y hacer:


**$** `docker-compose down`  



## PRODUCCION
Revisar dockerfiles de frontend y backend descomentar lineas de produccion comentar locales
Revisar dockercompose.yml y habilitar nginx
Eliminar linea:  "proxy": "http://backend:8000" en package.json
Antes de subir desde local, borrar los archivos de migracion menos:
__init__.py

Descartar cambios locales

Updating 0faf7bf..5d0d610
error: Your local changes to the following files would be overwritten by merge:
        backend/JKR_Records/api/migrations/0001_initial.py
        backend/JKR_Records/users/migrations/0001_initial.py
        docker-compose.yml
Please commit your changes or stash them before you merge.
Aborting
root@srv42364966:/srv/JKR_Records#


git checkout -- backend/JKR_Records/api/migrations/0001_initial.py
git checkout -- backend/JKR_Records/users/migrations/0001_initial.py
git checkout -- docker-compose.yml
git pull origin <branch-name>


Mantener contenedor corriendo despues de cerrar putty:
docker composer up -d
