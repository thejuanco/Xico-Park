const admin = (req, res) =>{
    res.render('admin/dashboard', {
        pagina: 'Admin'
    })
}

export {
    admin
}