//Creando el modelo de Multas
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Estacionamiento = db.define('cajon_estacionamiento', {
    idCajon: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    horaInicio: {
        type: DataTypes.DATE,
        defaultValue: new Date 
    }, 
    horaFin:{
        type: DataTypes.DATE, 
        defaultValue: new Date
    }, 
    monto: {
        type: DataTypes.INTEGER,  
        allowNull: false
    }, 
    motivo: {
        type: DataTypes.STRING
    } 
})

export default Estacionamiento