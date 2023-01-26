import {Router} from 'express'
const router = Router()
import * as reservaCtrl from '../controllers/reserva.controller'
import * as authJwt  from '../middlewares/Autorization'

router.post('/',authJwt.verifyToken,reservaCtrl.createReserva)
router.get('/',authJwt.verifyToken,reservaCtrl.getReserva)
export default router;