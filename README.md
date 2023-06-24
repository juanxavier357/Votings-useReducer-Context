# Fase Principal: Sprint 3

# Make It Real - Todo se trata sobre el contexto
This is a solution to the All React Context project of the Make It Real course.

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

**The challenge**

Vamos a realizar un ejercicio que nos ayude a familiarizarnos con la estructura que se necesita a la hora de implementar un Contexto de react y como consumir ese contexto mediante useContext.

Para ello crear un sistema de votacion:

este sistema tendra 4 candidatos,
cada uno sera un componente que debera permitir realizar el voto por el candidato correspondiente.
Un component TotalVotos que debe mostrar el numero total de votos.
Componente VotosIndividuales que debera mostrar el resultado de los votos de forma individual de los candidatos. Estos pueden ser en numero o porcentaje, dependiendo del filtro q el usuario elija.
Componente Filtro el cual va permitir al usuario mostrar si quiere ver los resultuados indivudales de forma porcentual o numerica (totales), ademas de seleccionar que Candidatos queremos ver en los resultados.
El sistema debe calcular el porcentaje para cada candidato de forma automatica cada que se agregue un nuevo voto.

Idea de layout (fea, pero es lo q tenemos 🙈)

**Screenshot**

  ![modelo - layout](https://s3.amazonaws.com/makeitreal/images/classroom-prod/87a09f4b88a3cd5ea9dbfb49d4446df8.png)

  
## My process

**Built with**
* Visual Studio Code
* Vite jsx, scss
* Hook useContext
* deployment vercel.com

**What I learned**
* A dar el contexto a un componente padre para proveerles de las mismas funciones a sus componentes hijos (children)
* A usar mejor la lógica de jsx para implementar las funcionalidades y llamados de la información desde el contexto.

**Continued development**
  Implementaré context en mis futuros proyectos para una mejor distribución de los estados en los componentes.

**Useful resources**
  Git, GitHub, chat.openai.com, vercel.com

## Author
  Website - www.agenciawebmovil.com/
  GitHub - @juanxavier357

## Acknowledgments
  Agradezco a mis mentores Cristian y Juan Lorza por el buen trabajo que están haciendo al transmitir muy bien sus enseñanzas.
