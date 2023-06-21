//En este archivo se almacenaran las rutas exclusivamente del registro de usuarios 
import express from 'express'
//Formulario 
import { inicio, formularioLogin, autenticar, formularioRegister, registrar, confirmar, forgotPassword, resetPassword,comprobarToken, nuevoPassword} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/inicio', inicio)

router.get('/login', formularioLogin)
router.post('/login', autenticar)

router.get('/register', formularioRegister)
router.post('/register', registrar)

router.get('/confirmar-cuenta/:token', confirmar)

router.get('/forgotPassword', forgotPassword)
router.post('/forgotPassword', resetPassword)

//Almacenar la nueva contraseña 
router.get('/forgotPassword/:token', comprobarToken)
router.post('/forgotPassword/:token', nuevoPassword)

export default router