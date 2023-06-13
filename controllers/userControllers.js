//En este archivo se relacionan todo lo relacionado con el registro de usuarios 

const inicio = (req, res) =>{
    res.render('layout/inicio', {
        pagina: 'Inicio'
    })
}

export {
    inicio
}