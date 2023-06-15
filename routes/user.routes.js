//En este archivo se almacenaran las rutas exclusivamente del registro de usuarios 
import express from 'express'
import { inicio, formularioLogin, formularioRegister, registrar, forgotPassword} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/inicio', inicio)

router.get('/login', formularioLogin)

router.get('/register', formularioRegister)
router.post('/register', registrar)

router.get('/forgotPassword', forgotPassword)

export default router