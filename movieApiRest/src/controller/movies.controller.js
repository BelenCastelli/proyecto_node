const Movie = require ('../models/movies')

let movies = [
    new Movie("Trainspotting",1996,"británica","drama/crimen", 'https://static.wikia.nocookie.net/lostmedia/images/9/92/TrainspPstr_%281%29.jpg/revision/latest/thumbnail/width/360/height/360?cb=20220613032500&path-prefix=es',1),
    new Movie("El club de la lucha", 1990, "estadunidense", "Drama/Thriller/Satira", 'https://pics.filmaffinity.com/El_club_de_la_lucha-996839610-large.jpg', 2),
    new Movie ("La naranja mecánica", 1975, "británica", "Drama/Crimen/Thriller psicológico", 'https://cinematecadebogota.gov.co/sites/default/files/styles/318_x_460/public/afiches/poster_ocw.jpg?itok=2aaYIgFV', 3),
    new Movie ("Requiem por un sueño", 2000, "estadunidense", "drama/drogas", 'https://pics.filmaffinity.com/Raequiem_por_un_sueano-857368734-large.jpg', 4)
]

function getStart(req, res){
    let respuesta = {error: false, code: 200, message: 'Starting point'}
    res.json(respuesta)
}   

function getMovies(req, res){
    let respuesta; 
    if (movies != null){
        respuesta = {error:false, code: 200, data: movies}
    } else {
        respuesta = {error: true, code: 200, message: 'There are no movies'}
    }
    res.json(respuesta)
}

function getMovie(req, res){
    let respuesta; 
    let id_movie = req.params.id_movie

    if(movies != null){
        let moviesFilter = movies.filter(movie => movie.id_movie == id_movie);
        if(moviesFilter.length > 0){
            respuesta = {error: false, code: 200, data: moviesFilter}
        } else {
            respuesta = {error:true, code: 200, message: 'The movie has not been found', data:movies}
        }

    } else {
        respuesta = {error: true, code: 200, message: 'There are no movies'}
    }

    res.json(respuesta)
}

function postMovie(req, res) {
    let respuesta; 
    let id_movie = req.body.id_movie
    if (movies != null){
        let exist = movies.some(movie => movie.id_movie === id_movie)

        if(!exist){
            let newMovie = new Movie(req.body.title, req.body.releaseYear,
                                    req.body.nationality, req.body.genre,
                                    req.body.photo, req.body.id_movie)
            movies.push(newMovie)
            respuesta = {error: false, code: 200, data: movies}
        } else {
            respuesta = {error: true, code: 200, message: 'The movie already exists'}
        }
    } else {
        respuesta = {error: true, code: 200, message: 'There are no movies'}
    }

    res.json(respuesta)
}

function putMovie(req, res){
    let respuesta; 
    let id_movie = req.body.id_movie

    if(movies != null){
        let moviesFilter = movies.filter(movie => movie.id_movie === id_movie)
        if(moviesFilter.length > 0){
            moviesFilter[0].title = req.body.title
            moviesFilter[0].releaseYear = req.body.releaseYear
            moviesFilter[0].nationality = req.body.nationality
            moviesFilter[0].genre = req.body.genre
            moviesFilter[0].photo = req.body.photo

            respuesta = {error: false, code: 200, message:'updated movie', data: movies}
            
        } else {
            respuesta = {error: true, code: 200, message: 'The movie does not exist'}
        }
    } else {
        respuesta = {error: true, code: 200, message: 'There are no movies'}
    }

    res.json(respuesta)
}

function deleteMovie(req, res){
    let respuesta
    let id_movie = req.body.id_movie

    if(movies != null){
        let index = movies.findIndex(movie =>movie.id_movie === id_movie)
        console.log("3" +index);
        if(index !== -1){
            movies.splice(index, 1)
            respuesta = {error:false, code: 200, message: 'Movie deleted correctly', data: movies}
        } else {
            respuesta = {error: true, code: 200, message: 'The movie does not exist'}
        }
    } else {
        respuesta = {error: true, code: 200, message: 'There are no movies'}
    }

    res.json(respuesta)
}

module.exports = {getStart, getMovies, getMovie, postMovie, putMovie, deleteMovie}