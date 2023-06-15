//En este archivo se relacionan todo lo relacionado con el registro de usuarios 

import Usuario from "../models/Usuario.js"


const inicio = (req, res) =>{
    res.render('layout/inicio', {
        pagina: 'Inicio'
    })
}

const formularioRegister = (req, res) =>{
    res.render('auth/register', {
        
    })
}

const registrar = async (req, res) =>{
    
    const usuario = await Usuario.create(req.body)

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