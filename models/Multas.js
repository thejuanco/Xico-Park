//Creando el modelo de Multas
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Multas = db.define('multas', {
    idMultas: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    monto: {
        type: DataTypes.INTEGER, 
    }, 
    motivo:{
        type: DataTypes.STRING, 
    }
})

export default Multas