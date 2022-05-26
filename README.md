# Disney Api
## Introducción
- API hecha en nodejs con sequelize y express con fines para realizar el desafio de alkemy.org
- A continuación veran una pequeña guía de uso.
- Link de la API deployeada en heroku https://disney-api1.herokuapp.com/

### Registro
- https://disney-api1.herokuapp.com/auth/register
- En este caso se requiere un usuario e email los cuales son únicos y su respectiva contraseña, el cual devolverá el id de cuenta, usuario, email y contraseña encriptada.
[![](https://i.imgur.com/k2Oc1oa.png)](https://i.imgur.com/k2Oc1oa.png)

- Actualmente si envia correos electronicos dando la bienvenida al servicio pero de momento solamente a la bendeja de mailtrap que fue para realizar pruebas durante el desarrollo.
[![](https://i.imgur.com/B4OoTQ7.png)](https://i.imgur.com/B4OoTQ7.png)

### Login
- https://disney-api1.herokuapp.com/auth/login
- Una vez creada la cuenta, procederemos a loguearnos en ella ya que no podremos agregar, editar o eliminar personajes/peliculas/series.
[![](https://i.imgur.com/k6tzYrq.png)](https://i.imgur.com/k6tzYrq.png)

- Nos pedirá el usuario y contraseña para poder loguear y nos devolvera un token que es el cual utilizaremos para autorizarnos dentro de la API.

### Como autorizarse
- Nos iremos a la pestaña "Authorization" y en type pondremos "Bearer Token" y pegaremos nuestro token para estar autorizados.
[![](https://i.imgur.com/pqEJVcD.png)](https://i.imgur.com/pqEJVcD.png)
## Genero
### Agregar genero de serie o pelicula
- Aquí nos pedirá una imagen y el nombre del genero.
	- "img"
	- "name"
	- https://disney-api1.herokuapp.com/genres
[![](https://i.imgur.com/V8bqQPT.png)](https://i.imgur.com/V8bqQPT.png)
## Peliculas o Series
### Agregar peliculas o series
- https://disney-api1.herokuapp.com/movies
- Los datos requeridos para poder agregar correctamente una pelicula o serie son:
	- "img" = url de la imagen de la pelicula.
	- "title" = titulo de la serie o pelicula.
	- "releasedate" = fecha de estreno de la pelicula en formato AAAA-MM-DD
	- "rating" = Calificación del 1 al 5 (el cual puede ser un numero entero o no)
	- "GenreGenreId" = Id del genero al que pertenece.
[![](https://i.imgur.com/qUxO9Eu.png)](https://i.imgur.com/qUxO9Eu.png)

### Consultas de peliculas o series
- https://disney-api1.herokuapp.com/movies
- Al realizar un get sin querys devolverá el listado de peliculas mostrando su imagen, titulo y fecha de esteno.
[![](https://i.imgur.com/qlNltat.png)](https://i.imgur.com/qlNltat.png)
- Disponemos de 3 querys a realizar, en este caso es filtrar por nombre de pelicula tal como se en la imagen.
	- https://disney-api1.herokuapp.com/movies?name=Pinocchio
[![](https://i.imgur.com/mG3L4tx.png)](https://i.imgur.com/mG3L4tx.png)
- Segundo filtro es por genero (En este caso solo he ingresado uno, el cual es fantasia)
	- https://disney-api1.herokuapp.com/movies?genre=1
[![](https://i.imgur.com/PlzthSi.png)](https://i.imgur.com/PlzthSi.png)
- Tercer filtro es ordenar de manera ASC o DESC.
	- https://disney-api1.herokuapp.com/movies?order=ASC
	- https://disney-api1.herokuapp.com/movies?order=DESC
[![](https://i.imgur.com/EWOn9Ho.png)](https://i.imgur.com/EWOn9Ho.png)

### Actualizar/Eliminar una pelicula o serie.
- En este caso nos pedirá el body a ingresar junto con la id en su url, los valores editables son:
	- img
	- title
	- releasedate
	- rating
	- GenreGenreId
- https://disney-api1.herokuapp.com/movies/:id
[![](https://i.imgur.com/cljniI1.png)](https://i.imgur.com/cljniI1.png)

- Al remover una pelicula o serie solamente nos pedirá el id de este.
	- https://disney-api1.herokuapp.com/movies/:id
[![](https://i.imgur.com/UHGpFdl.png)](https://i.imgur.com/UHGpFdl.png)

## Personajes
### Agregar Personajes
- Aquí nos pedirá lo siguiente:
	- "img": URL de imagen del personaje.
	- "name": nombre del personaje.
	- "age": edad del personaje.
	- "wight": peso del personaje.
	- "story": Historia corta del personaje.
	- "MovieMovieId": id de la pelicula o serie a la cual pertenece.
	- https://disney-api1.herokuapp.com/characters
[![](https://i.imgur.com/QYDWWJP.png)](https://i.imgur.com/QYDWWJP.png)
### Consultas de personajes
- Al realizar consulta de los personajes también tendremos 3 filtros. Si no se ingresa ninguno nos devolverá la lista completa de ellos con su imagen y nombre.
	- https://disney-api1.herokuapp.com/characters
[![](https://i.imgur.com/6vpGy2K.png)](https://i.imgur.com/6vpGy2K.png)
- Uno de los filtros a ocupar es el nombre del personaje.
	- https://disney-api1.herokuapp.com/characters?name=Pinocho
[![](https://i.imgur.com/Q38oXj4.png)](https://i.imgur.com/Q38oXj4.png)
- El segundo filtro es su edad, mostrará a todos los personajes según la edad a consultar.
	- https://disney-api1.herokuapp.com/characters?age=60
[![](https://i.imgur.com/IP7PFdP.png)](https://i.imgur.com/IP7PFdP.png)
- Tercer filtro es la pelicula a la cual esta cada uno, mostrará una lista de todos los personajes pertenecientes a esa pelicula.
	- https://disney-api1.herokuapp.com/characters?movies=2
[![](https://i.imgur.com/dHEm79t.png)](https://i.imgur.com/dHEm79t.png)

### Editar o eliminar un personaje.
- Al momento de editar un personaje nos pedirá su id en la url y en el cuerpo de este los valores a editar son:
	- img
	- name
	- age
	- weight
	- story
	- MovieMovieId
	- https://disney-api1.herokuapp.com/characters/:id
[![](https://i.imgur.com/vryobJB.png)](https://i.imgur.com/vryobJB.png)

- Y finalmente para eliminar un personaje, solo nos pedirá su ID
	- https://disney-api1.herokuapp.com/characters/:id
[![](https://i.imgur.com/4Qtn3la.png)](https://i.imgur.com/4Qtn3la.png)