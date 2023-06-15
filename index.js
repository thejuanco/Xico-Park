import express, { urlencoded } from "express";
import user from './routes/user.routes.js'
import db from "./config/db.js";

//Creando la app 
const app = express()

//Habilitando la lectura de formularios 
app.use(urlencoded({extended: true}))

//Habilitando pug
app.set('view engine', 'pug')
app.set('views', './views')

//Habilitando la carpeta publica
app.use(express.static('public'))

//Definiendo el routing 
app.use('/', user)

//Definiendo el puerto 
const port = 4000 
app.listen(port, ()=>{
    console.log(`Se esta usando el puerto: ${port}`)
})

//Conectando a la base de datos 
try {
    await db.authenticate(); 
    console.log('Se ha establecido conexion con la base de datos')
} catch (error) {
    console.log(error)
}