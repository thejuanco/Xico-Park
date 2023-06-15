//Creando el modelo de Multas
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Cobrador = db.define('cobrador', {
    idCobrador: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false 
    }, 
    a_paterno:{
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    a_materno: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    telefono: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    negocio: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})

export default Cobrador