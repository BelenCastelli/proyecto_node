const {Router} = require ('express')
const router = Router();
const moviesCtrl = require ('../controller/movies.controller')

router.get("/", moviesCtrl.getStart);
router.get('/movies', moviesCtrl.getMovies);
router.get('/movies/:id_movie', moviesCtrl.getMovie);
router.post('/movies', moviesCtrl.postMovie)
router.put('/movies', moviesCtrl.putMovie)
router.delete('/movies', moviesCtrl.deleteMovie)

module.exports = router