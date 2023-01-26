import * as userCtrl from '../controllers/user.controller'
import * as authJwt  from '../middlewares/Autorization'
import {Router} from 'express'
const router = Router()

router.get('/',[authJwt.verifyToken,authJwt.isAdmin],userCtrl.getUsers);
router.put('/:id',[authJwt.verifyToken],userCtrl.updateUser);

export default router;