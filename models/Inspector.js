//Creando el modelo de Inspector 
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Inspector = db.define('inspector', {
    idPagos: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    montoPagado: {
        type: DataTypes.INTEGER, 
    }, 
    fachaInicio:{
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }, 
    fechaFin: {
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
    }   
})

export default Inspector