import jwt from 'jsonwebtoken'
//Generando un archivo unico para identificar al usuario 

//Esta funcion general un JWT 
const generarJWT = (datos) => jwt.sign({id: datos.id, nombre: datos.nombre}, process.env.JWT_SECRET, {
        //El tiempo que va a durar 
        expiresIn: '1d'
    })

//Generando un numero aleatorio 
const generarId = () =>  Math.random().toString(32).substring(2) +  Date.now().toString(32)

export {
    generarJWT, 
    generarId
}