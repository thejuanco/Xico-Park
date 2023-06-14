//En este archivo se almacenaran las rutas exclusivamente del registro de usuarios 
import express from 'express'
import { inicio, formularioLogin, register, forgotPassword} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/inicio', inicio)

router.get('/login', formularioLogin)

router.get('/register', register)

router.get('/forgotPassword', forgotPassword)

export default router