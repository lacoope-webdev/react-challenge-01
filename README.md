# React Challenge 01 - Article Sorting

La aplicación "Article Sorting", desarrollada en React, muestra un listado de artículos.

Algo de la funcionalidad ya ha sido implementada, pero la aplicación aún está incompleta.

El desafío es permitir al usuario poder ordenar este listado por votos de los artículos (upvotes) de manera descendente o por la fecha de publicación (publication date) también de manera descendente.

## Requisitos detallados

* El componente Artículos toma una matriz de artículos como propiedad. Cada elemento de esta matriz es un objeto con tres propiedades: title, upvotes, date (string AAAA-MM-DD). Estos valores se encuentran en el archivo `src/constants.js`.
* De forma predeterminada, los artículos deben mostrarse en una tabla ordenada por los título de los artículos.
* Al hacer clic en el botón "Más votados", los artículos se reordenarán y se mostrarán por la cantidad de votos positivos en orden descendente.
* Al hacer clic en el botón "Más recientes", los artículos se reordenarán y se mostrarán por fecha en orden descendente.
* Cada artículo tiene una fecha de publicación única.