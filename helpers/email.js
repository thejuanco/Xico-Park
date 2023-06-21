//Configurando nodemailer para recibir el correo de confirmacion 
import nodemailer from 'nodemailer'

//primero inicia sesion con los datos del usuario 
const emailRegistro = async (datos) =>{
    const transport = nodemailer.createTransport({
      //Ocultamos los campos 
        host: process.env.EMAIL_HOST, 
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    
      const {nombre, correo, token } = datos 
//luego envia el email 
      await transport.sendMail({
        from: "Xico-Park.com" , 
        to: correo, 
        subject: "Confirmacion de Cuenta", 
        text: "Bienvenido a Xico-Park, por favor confirma tu cuenta", 
        html: `<p>Hola, ${nombre} confirma tu cuenta </p>
        <p>Termina de configurar tu cuenta, en el siguiente enlace 
        <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 4000}/confirmar-cuenta/${token}">Confirmar cuenta</a> </p>
        `
      })

      //nos muestra los datos que previamente junto con el token 
      console.log(datos)
}

const emailOlvidePassword = async (datos) =>{
  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, 
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  
    const {nombre, correo, token } = datos 
//luego envia el email 
    await transport.sendMail({
      from: "Xico-Park.com" , 
      to: correo, 
      subject: "Restablece tu Cuenta", 
      text: "Bienvenido a Xico-Park, por favor restablece tu cuenta", 
      html: `<p>Hola, ${nombre} restablece tu cuenta </p>
      <p>sigue el siguiente enlace para generar una nueva constraseña:  
      <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 4000}/auth/forgotPassword/${token}">Restablecer cuenta</a> </p>
      `
    })

    //nos muestra los datos que previamente junto con el token 
    console.log(datos)
}

export { 
    emailRegistro, 
    emailOlvidePassword
}