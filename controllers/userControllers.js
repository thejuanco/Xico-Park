//En este archivo se relacionan todo lo relacionado con el registro de usuarios 
import { check, validationResult } from "express-validator"
import { generarId, generarJWT } from "../helpers/token.js"
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js"
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
    await check('correo').notEmpty().isEmail().withMessage('El correo no es valido').run(req)
    await check('password').notEmpty().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres').run(req)
    await check('placas').notEmpty().withMessage('Tienes que ingresar tus placas').run(req)
    await check('telefono').notEmpty().isLength({min:10}).withMessage('Tienes que ingresar tu telefono').run(req)

    let resultado = validationResult(req)

    //Verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
        //Si el usuario no esta registrado, no avanza del registro 
        return res.render('auth/register', {
            pagina: 'Crear Cuenta', 
            errores: resultado.array(), 
        })
    }

    //Extrayendo los datos del usuario 
    const {nombre, a_paterno, a_materno, correo, password, placas, telefono} = req.body

    //Verificar si el usuario existe, por su correo 
    const existeUsuario = await Usuario.findOne({ where: { correo }})
    if (existeUsuario){
            return res.render('auth/register', {
            pagina: 'Crear Cuenta', 
            errores: [{msg: 'EL usuario ya esta registrado'}], 
            usuario: {
                nombre: req.body.nombre, 
                correo: req.body.correo
            }
        })
    }

    //almacenar un usuario 
    const usuario = await Usuario.create({
        nombre, 
        a_paterno, 
        a_materno, 
        correo,
        password, 
        placas, 
        telefono,
    //Generando el token unico 
        token: generarId()
    })

    //Se envia el mensaje de confirmacion 
    res.render ('templates/message', {
        pagina: 'Cuenta creada correctamente', 
        mensaje: `Hemos enviado un email de confirmacion, para el usuario: `, 
        email: req.body.correo
    })

    //Enviar email de confirmacion 
    emailRegistro({
        nombre: usuario.nombre, 
        correo: usuario.correo, 
        token: usuario.token
    }) 
    //mostrar mensaje de confirmación para el usuario 
    //utilizamos el res.render para renderizar la pagina que va a mostrar 
    res.render ('templates/message', {
        pagina: 'Cuenta creada correctamente', 
        mensaje: 'Hemos enviado un email de confirmacion '
    })
    
}

//Ruta para confirmar al usuario 
const confirmar = async (req, res) => {
    const {token } = req.params;  
    console.log(token)

    //verificar si el token es valido o no 
    const usuario = await Usuario.findOne ({where: {token}})
    console.log(usuario)

    if(!usuario){
        return res.render('auth/confirmar-cuenta', {
            pagina: 'Error al confirmar tu cuenta', 
            mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo ', 
            error: true
        })
    }

    //confirmar la cuenta 
    usuario.token = null
    usuario.confirmado = true 
    await usuario.save(); 
    return res.render('auth/confirmar-cuenta', {
        pagina: 'Cuenta confirmada correctamente', 
        mensaje: 'La cuenta se confirmo correctamente'
    })
}

//Formulario de login 
const formularioLogin = (req, res) =>{
    res.render('auth/login', {
        pagina: 'Login'
    })
}

const autenticar = async (req, res) =>{
    //validar al usuario 
    await check('correo').isEmail().withMessage('El correo no es valido').run(req)
    await check('password').notEmpty().withMessage('La contraseña es obligatoria').run(req)

    let resultado = validationResult(req) 

    //Verificar que el resultado este vacio
    if (!resultado.isEmpty()) {
    //Si el resutado esta vacio, no avanza del login
        return res.render('auth/login', {
            pagina: 'Login', 
            errores: resultado.array(), 
        })
    }

    //Extraer al usuario del body 
    const {correo, password} = req.body
    //comprobar si el usuario existe 
    const usuario = await Usuario.findOne({where: {correo}})
    if (!usuario){
        return res.render('auth/login', {
            pagina: 'Iniciar Sesion', 
            errores: [{msg: 'El usuario no existe '}]
        })
    }

    

}

//Ruta para recuperar la contraseña 
const forgotPassword = (req, res) =>{
    res.render('auth/forgotPassword', {
        pagina: 'Forgot Password'
    })
}

const resetPassword = async (req, res) =>{

    //Validando el correo 
    await check('correo').isEmail().withMessage('El correo no es valido.').run(req)

    let resultado = validationResult(req)

    //Si el resultado esta vacio no avanza 
    if (!resultado.isEmpty()) {
            return res.render('auth/forgotPassword', {
                pagina: 'Forgot Password', 
                errores: resultado.array()
            })
        }

    //Mensaja para el restablecimiento de cuenta 
    res.render('templates/recoverPassword', {
        pagina: 'Recupera tu contraseña',
        mensaje: `Se ha enviado un correo al usuario, para recuperar su contraseña`,
        correo: req.body.correo
    })
}

export {
    inicio, 
    formularioRegister, 
    confirmar,
    registrar,
    formularioLogin, 
    autenticar,
    forgotPassword, 
    resetPassword
}