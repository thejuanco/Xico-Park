//En este archivo se relacionan todo lo relacionado con el registro de usuarios 
import { check, validationResult } from "express-validator"
import Usuario from "../models/Usuario.js"


const inicio = (req, res) =>{
    res.render('layout/inicio', {
        pagina: 'Inicio'
    })
}

const formularioRegister = (req, res) =>{
    res.render('auth/register', {
        pagina: 'Register'
    })
}

const registrar = async (req, res) =>{

    //Agregando las validaciones
    await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('a_paterno').notEmpty().withMessage('El apellido no puede ir vacio').run(req)
    // await check('a_materno').notEmpty().withMessage('El apellido no puede ir vacio').run(req)
    await check('correo').notEmpty().isEmail().withMessage('El correo no es valido').run(req)
    await check('password').notEmpty().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres').run(req)
    await check('placas').notEmpty().withMessage('Tienes que ingresar tus placas').run(req)
    await check('telefono').notEmpty().isLength({min:10}).withMessage('Tienes que ingresar tu telefono').run(req)

    let resultado = validationResult(req)

    //Verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        return res.render('auth/register', {
            pagina: 'Register', 
            errores: resultado.array(), 
        })
    }

    const usuario = await Usuario.create(req.body)

    res.render ('templates/message', {
        pagina: 'Cuenta creada correctamente', 
        mensaje: `Hemos enviado un email de confirmacion, para el usuario: ${usuario.email}`, 
        email: req.body.correo
    })

    // res.json(usuario)
    //req.flash('success_msg', 'Usuario registrado con éxito')
}

const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: 'Login'
    })
}

const forgotPassword = (req, res) =>{
    res.render('auth/forgotPassword', {
        pagina: 'Forgot Password'
    })
}
export {
    inicio, 
    formularioRegister, 
    registrar,
    formularioLogin, 
    forgotPassword
}