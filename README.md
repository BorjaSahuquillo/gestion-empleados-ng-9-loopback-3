# WebappEmployeeAndDepartment

Proyecto realizado como prueba técnica. Se trata de una aplicación web que permite gestionar empleados y departamentos.


## Arrancar el proyecto

- Navegamos a `/api-employee-and-department` y hacemos `npm i` de los node_modules.
- Navegamos a `/webapp-employee-and-department` y hacemos `npm i` de los node_modules.

Con los node modules instalados vamos a la carpeta raíz del proyecto y ejecutamos el siguiente comando:

```bash docker network create employee-and-department-network```

```bash docker-compose up -d```

**Nota**: El web app con nginx, al refrescar con una ruta específica da un problema con el nginx, no he podido solucionarlo, está localizado en la configuración del nginx. Se puede levantar, con un npm run start para comprobar que el reload funciona correctamente.


### Inicio de sesión front

Navegar a [localhost](http://localhost) (Nota: OJO NO FUNCIONA EL RELOAD CON RUTAS ESPECÍFICAS)


Para poder logearnos, se crea automáticamente un usuario con las credenciales:
````
{
email: admin@gmail.com, 
password: admin1234
}
````
Si queremos crear uno, nos metemos en el swagger y realizamos un post con email y password. (http://localhost:3000/explorer/#/User).

URL del Swagger API para crear usuarios: http://localhost:3000/explorer/#/User