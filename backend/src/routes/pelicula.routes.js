import {Router} from 'express'
const router = Router()
import * as peliculaCtrl from '../controllers/peliculas.controller'
import * as authJwt  from '../middlewares/Autorization'

router.post('/',[authJwt.verifyToken,authJwt.isAdmin],peliculaCtrl.createPelicula)
router.get('/',peliculaCtrl.getPelicula)
router.get('/:id',peliculaCtrl.getPeliculaById)
router.put('/:id',authJwt.verifyToken,peliculaCtrl.updatePelicula)
router.delete('/:id',peliculaCtrl.deletePelicula)

export default router;