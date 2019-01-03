## Acerca

Este proyecto presenta la solución técnica de la prueba de Full-Stack o Front-End de [Almundo](https://almundo.com.co/).
El proyecto completo(Frontend y Backend) ha sido desplegado en la nube, en los servidores de Amazón, utilizando para ello los servicios de AWS (Amazón Web Services). 
[Ver proyecto en producción](https://hotels.almundo.jeovalo.com/)

La aplicación está construida de la siguiente manera:

### Frontend
El Frontend ha sido generado con:
[Angular CLI](https://github.com/angular/angular-cli) version 6.2.8.

### Backend
El Backend ha implementado con:
[node.js](https://nodejs.org/es/) versión v11.4.0
[npm](https://www.npmjs.com/) versión 6.4.1
[express](http://expressjs.com/) versión 4.16.0

### Despliegue Producción
El despliegue en un entorno de producción se hizo en:
[AWS](https://aws.amazon.com/)
[Almundo Hotels](https://hotels.almundo.jeovalo.com/)

## Descripción de la Solución

Para implementar la solución se utilizó el framework **Angular 6** para la parte `Frontend` y **Express** para la parte `Backend`. 
La aplicación es responsive design para lo cual se utilizó **Bootstrap 4**.

## Run
Para ejecutar la aplicación,  se debe ejecutar por separado el servidor de `Backend` y el de `Frontend`, por favor leer el README de cada proyecto donde se
detalla exactamente cómo ejecutar cada aplicación respectivamente en los diferentes entornos.
A continuación aparece una guía rápida con los pasos que se deben seguir para ejecutar la aplicación en el entorno de desarrollo.

### Requisitos Previos
- Instalar Node y Npm.

### Clonar la Rama del repositorio de Github
- Clonar la rama desde github, la rama contiene dos directorios `backend` y `frontend`  que corresponden a la aplicación `Front` y `Back` respectivamente.

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

## Ayuda adicional
Para obterner más ayuda sobre Nodje JS utilizar el comando `node --help` o visite el sitio oficial de 
[Node Js](https://nodejs.org/es/).

Para obterner más ayuda sobre Npm utilizar el comando `npm --help` o visite el sitio oficial de 
[Npm](https://www.npmjs.com/).

Para obterner más ayuda sobre Amazón AWS visite el sitio oficial de  [Amazón AWS](https://aws.amazon.com).


## LICENSE

Este código es liberado bajo licencia [Jeovalo](https://www.jeovalo.com). Ver la LICENCIA para más detalles.
