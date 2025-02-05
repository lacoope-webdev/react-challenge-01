# React Challenge 01 - Article Sorting

La aplicación "Article Sorting", desarrollada en React, muestra un listado de artículos.

Algo de la funcionalidad ya ha sido implementada, pero la aplicación aún está incompleta.

El desafío es permitir al usuario poder ordenar este listado por la fecha de publicación (publication date) de manera ascendente o descendente.

## Requisitos detallados

* El componente Artículos toma una matriz de artículos como propiedad. Cada elemento de esta matriz es un objeto con tres propiedades: title, upvotes, date (string AAAA-MM-DD). Estos valores se encuentran en el archivo `src/constants.js` y deben mostrarse en la tabla.
* De forma predeterminada, los artículos deben ordenarse por los artículos más votados a los menos votados.
* Al hacer clic en el botón "Ordenar por ...", los artículos se reordenarán y se mostrarán por fecha en orden descendente o ascendente, invirtiendo el orden que ya poseían. La primer interacción debe ordenar de forma descendente. 
* Cada artículo tiene una fecha de publicación única.