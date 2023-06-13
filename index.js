import express, { urlencoded } from "express";

//Creando la app 
const app = express()

//Habilitando la lectura de formularios 
app.use(urlencoded({extended: true}))

//Habilitando la pug


//Definiendo el puerto 
const port = 4000 
app.listen(port, ()=>{
    console.log(`Se esta usando el puerto: ${port}`)
})

