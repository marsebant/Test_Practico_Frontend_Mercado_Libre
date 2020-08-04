# Test Practico Frontend Mercado Libre
Test práctico para aspirantes al área de front-end de Mercado Libre.

## Tecnologías Utilizadas

JavaScript ES6

Frontend: Angular 10, HTML, CSS

Backend: Node.js v10.15.3, Express, dotenv, Axios, Jasmine

## Despliegue

Clonar el repositorio git
```bash
git clone https://github.com/marsebant/Test_Practico_Frontend_Mercado_Libre.git
```
Descargar e instalar [node](https://nodejs.org/es/download/)

### API

```bash
cd api
npm install
npm start
```

El backend está configurado para recibir peticiones en la URL `http://localhost:3000/api`.

En la consola, al final de la ejecución de npm start, se informa la URL donde está atendiendo el API.

Si se desea modificar la configuración, se debe modificar la variable PORT el archivo api/.env. 

Si se modifica el puerto de escucha del API, también debe modificarse con la misma url la variable api.base del archivo client/src/environments/environment.ts.

### Client

```bash
cd client
npm install
npm start
```

Para acceder al servidor del SPA ingresar a la URL `http://localhost:4200/` (por defecto).

En la consola, al final de la ejecución de npm start, se informa la URL donde está atendiendo el servidor.

Si se desea modificar el puerto de escucha del servidor web ejecutar la siguiente línea
```bash
ng serve --port puerto_elegido
```

### Testing
Para ejecutar el test, es necesario que el api **no se esté ejecutando**. En caso de que se esté ejecutando, dirigirse a la carpeta del api y presionar *Ctrl+C*
```bash
cd api
npm test
```
