## Acerca

Este proyecto presenta la solución técnica de la prueba de Full-Stack o Front-End de [Almundo](https://almundo.com.co/).
El proyecto completo(Frontend y Backend) ha sido desplegado en la nube, en los servidores de Amazón, utilizando para ello los servicios de AWS (Amazón Web Services). 
[Ver proyecto en producción](https://hotels.almundo.jeovalo.com/)

La aplicación está construida con:

El Frontend ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 6.2.8.
El Backend ha implementado con [node.js](https://nodejs.org/es/) versión v11.4.0, [npm](https://www.npmjs.com/) versión 6.4.1 y [express](http://expressjs.com/) versión 4.16.0.
el despliegue se hizo en [AWS](https://aws.amazon.com/)

## Descripción de la Solución

Para implementar la solución se utilizó el framework **Angular 6** para la parte Frontend y **Express** para la parte Backend. 
La aplicación es responsive design para lo cual se utilizón **Bootstrap 4**.

## Run
Para ejecutar la aplicación,  se debe ejecutar por separado el servidor de Backend y el de Frontend, por favor leer el README de cada proyecto donde se
detalla exactamente cómo ejecutar cada aplicación respectivamente.
A continuación aparece una guía rápida con los pasos que se deben seguir ejecutar la aplicación en el entorno de desarrollo.

### Requisitos Previos
- Instalar Node y Npm.

### Clonar la Rama del repositirio de Gitgub
- Clonar la rama desde github, la rama contiene dos directorios `backend` y `frontend`  que corresponden a la aplicación Front y Back respectivamente.

```
git clone https://github.com/jeovalo/almundo-hotel.git

```

### Backend

#### Instalar el Backend

```
cd almundo-hotel/backend
npm install
```

#### Ejecutar Backend en Desarrollo

Ejecutar `npm run start-dev` para el entorno de desarrollo. Navegar localmente en `http://localhost:3000/`.

```
cd almundo-hotel/backend
npm run start-dev
```

### Frontend

#### Instalar el Frontend

```
cd almundo-hotel/frontend
npm install
```

#### Ejecutar Frontend en Desarrollo

Ejecutar `ng serve` para el entorno de desarrollo. Navegar localmente en `http://localhost:4200`.

```
cd almundo-hotel/frontend
ng serve
```


## LICENSE

Este código es liberado bajo licencia Jeovalo. Ver la LICENCIA para más detalles.
