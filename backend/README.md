# Almundo Hotels Producción
El proyecto completo(Frontend y Backend) ha sido desplegado en la nube, en los servidores de Amazón, utilizando para ello los servicios de AWS (Amazón Web Services). 
[Ver proyecto en producción](https://photos.estail.com/)

# Backend
El Backend se ha implementado con:
[node.js](https://nodejs.org/es/) versión v11.4.0
[npm](https://www.npmjs.com/) versión 6.4.1
[express](http://expressjs.com/) versión 4.16.0
[nodemon](https://nodemon.io/) versión 1.18.9

## Despliegue Producción
El despliegue en un entorno de producción se hizo en:
[AWS](https://aws.amazon.com/)
[Almundo Hotels](https://photos.estail.com/)


## Ejecutar en servidor de Desarrollo
Ejecutar `npm run start-dev` para el entorno de desarrollo. Navegar localmente en `http://localhost:3000/`. En el modo desarrollo, la aplicación reinicia automaticamente el servidor si detecta cualquier cambio en los archivos fuentes, para esto utiliza `nodemon`.

### Ejecutar la Aplicación con nodemon
Ejectuar el siguiente comando, como forma alternativa para ejecutar en local.
$ DEBUG=backend:* npm run iniciar

## Build Desarrollo
Al Ejecutar `npm run start-dev` se construye la aplicación de desarrollo. Los artefactos empaquetados y minificados se almacenan en el directorio `bin/www`. 

## Build Producción
Al Ejecutar `npm run start-prod` se construye la aplicación para producción, la única diferencia con respecto al build de desarrollo es la inicialización de una
variable que indica el entorno donde se despliega. Los artefactos empaquetados y minificados se almacenan en el directorio `bin/www`. 

## Ayuda adicional
Para obterner más ayuda sobre Nodje JS utilizar el comando `node --help` o visite el sitio oficial de 
[Node Js](https://nodejs.org/es/).

Para obterner más ayuda sobre Npm utilizar el comando `npm --help` o visite el sitio oficial de 
[Npm](https://www.npmjs.com/).

Para obterner más ayuda sobre Amazón AWS visite el sitio oficial de  [Amazón AWS](https://aws.amazon.com).


## LICENSE

Este código es liberado bajo licencia [Jeovalo](https://www.jeovalo.com). Ver la LICENCIA para más detalles.
