//Creando el modelo de Cajones
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Cajones = db.define('cajones', {
    idEstacionamiento: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nombreEstacionamiento: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    direccionEstacionamiento: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    disponible: {
        type: DataTypes.BOOLEAN, 
        allowNull: false
    }, 
    tarifa: {
        type: DataTypes.INTEGER, 
    }
})

export default Cajones