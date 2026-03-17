# Biblioteca Serverless Firebase

Proyecto académico orientado al desarrollo de una solución web con arquitectura **serverless** para la carga, almacenamiento, consulta y visualización de un **dataset de libros**.

La solución fue construida a partir de un archivo en formato **CSV**, el cual fue procesado y cargado en una base de datos **Cloud Firestore**. Posteriormente, se desarrolló una aplicación web que permite consultar el catálogo completo de libros, buscar registros por **ID** y buscar registros por **ISBN**, mostrando los resultados de forma clara en una interfaz amigable y visualmente atractiva.

## Objetivo del proyecto

Implementar una solución tecnológica que permita:

- Cargar un dataset público en formato CSV
- Almacenar la información en una base de datos serverless
- Construir una aplicación web para visualizar los registros
- Realizar búsquedas por identificador principal y por un campo único
- Aplicar un enfoque de arquitectura serverless en la solución

## Dataset utilizado

El proyecto trabaja con un dataset de libros que incluye los siguientes campos:

- `id`
- `isbn`
- `titulo`
- `autor`
- `genero`
- `anio`
- `pais`
- `stock`

## Arquitectura de la solución

La solución final se compone de los siguientes elementos:

- **Base de datos serverless:** Firebase Cloud Firestore
- **Carga de datos:** Script en Node.js para importar el archivo CSV
- **Interfaz web:** HTML, CSS y JavaScript
- **Funciones serverless para consulta:** capa API para obtención y búsqueda de libros
- **Despliegue web:** plataforma de hosting serverless

## Funcionalidades principales

La aplicación permite:

- Visualizar todo el catálogo de libros
- Buscar un libro por su **ID**
- Buscar un libro por su **ISBN**
- Mostrar resultados en una tabla organizada
- Consultar la información almacenada en la base de datos en la nube


## Tecnologías utilizadas

Firebase Firestore

Node.js

JavaScript

HTML5

CSS3

Git y GitHub

Vercel / Hosting serverless

Visual Studio Code

## Proceso general de desarrollo
1. Selección y preparación del dataset

Se seleccionó un dataset en formato CSV con información de libros. Posteriormente, se organizó y adaptó para trabajar con campos claros, incluyendo un identificador principal (id) y un campo único (isbn).

2. Creación de la base de datos serverless

Se configuró un proyecto en Firebase y se habilitó Cloud Firestore como base de datos serverless para almacenar el catálogo.

3. Importación de datos

Se desarrolló un script en Node.js que lee el archivo CSV y carga automáticamente cada registro como documento dentro de la colección libros en Firestore.

4. Desarrollo de la interfaz web

Se construyó una interfaz web orientada a un catálogo digital de biblioteca, con diseño limpio y elegante, utilizando tonos café, beige, blanco y negro suave.

5. Implementación de la lógica de consulta

Se configuró la lógica para consultar la base de datos y permitir:

cargar todos los libros

buscar por ID

buscar por ISBN

6. Despliegue y pruebas

La solución fue desplegada para permitir el acceso desde la web y se verificó su funcionamiento mediante pruebas de consulta y visualización.

## Ejecución del proyecto en entorno local
Instalar dependencias
npm install
Ejecutar script de carga del dataset
node scripts/importarDatos.js
Variables y configuración sensible

Este repositorio no incluye credenciales sensibles ni claves privadas.

Las configuraciones sensibles, como credenciales de Firebase o variables de entorno, deben mantenerse fuera del repositorio y configurarse directamente en la plataforma de despliegue o en variables locales del entorno.

Resultados obtenidos

Como resultado final, se obtuvo una aplicación web funcional que:

consulta datos reales desde una base de datos serverless

permite visualizar el catálogo completo

permite buscar libros por ID y por ISBN

ofrece una interfaz clara, organizada y profesional

demuestra la integración entre dataset, base de datos y aplicación web

Posibles mejoras futuras

Como trabajo futuro, esta solución podría ampliarse con funcionalidades como:

registro manual de nuevos libros desde la interfaz

edición y eliminación de registros

autenticación de usuarios

filtros por autor, género o país

paginación del catálogo

panel administrativo


Proyecto desarrollado como actividad académica de arquitectura y desarrollo web serverless.

# Biblioteca Serverless Firebase

Proyecto académico orientado al desarrollo de una solución web con arquitectura **serverless** para la carga, almacenamiento, consulta y visualización de un **dataset de libros**.

La solución fue construida a partir de un archivo en formato **CSV**, el cual fue procesado y cargado en una base de datos **Cloud Firestore**. Posteriormente, se desarrolló una aplicación web que permite consultar el catálogo completo de libros, buscar registros por **ID** y buscar registros por **ISBN**, mostrando los resultados de forma clara en una interfaz amigable y visualmente atractiva.

## Objetivo del proyecto

Implementar una solución tecnológica que permita:

- Cargar un dataset público en formato CSV
- Almacenar la información en una base de datos serverless
- Construir una aplicación web para visualizar los registros
- Realizar búsquedas por identificador principal y por un campo único
- Aplicar un enfoque de arquitectura serverless en la solución

## Dataset utilizado

El proyecto trabaja con un dataset de libros que incluye los siguientes campos:

- `id`
- `isbn`
- `titulo`
- `autor`
- `genero`
- `anio`
- `pais`
- `stock`

## Arquitectura de la solución

La solución final se compone de los siguientes elementos:

- **Base de datos serverless:** Firebase Cloud Firestore
- **Carga de datos:** Script en Node.js para importar el archivo CSV
- **Interfaz web:** HTML, CSS y JavaScript
- **Funciones serverless para consulta:** capa API para obtención y búsqueda de libros
- **Despliegue web:** plataforma de hosting serverless

## Funcionalidades principales

La aplicación permite:

- Visualizar todo el catálogo de libros
- Buscar un libro por su **ID**
- Buscar un libro por su **ISBN**
- Mostrar resultados en una tabla organizada
- Consultar la información almacenada en la base de datos en la nube

## Estructura del proyecto

```bash
biblioteca-serverless-firebase/
│
├── api/                     # Funciones serverless para consulta
├── dataset/                 # Archivo CSV con el catálogo de libros
├── scripts/                 # Script de importación de datos a Firestore
├── public/                  # Interfaz web (HTML, CSS, JS)
├── functions/               # Intento inicial de integración con Firebase Functions
├── firebase.json            # Configuración de Firebase
├── firestore.rules          # Reglas de Firestore
├── firestore.indexes.json   # Índices de Firestore
├── package.json             # Dependencias del proyecto
└── README.md                # Documentación del proyecto



