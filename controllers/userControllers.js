//En este archivo se relacionan todo lo relacionado con el registro de usuarios 

const inicio = (req, res) =>{
    res.render('layout/inicio', {
        pagina: 'Inicio'
    })
}

const register = (req, res) =>{
    res.render('auth/register', {
        
    })
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
    register,
    formularioLogin, 
    forgotPassword
}