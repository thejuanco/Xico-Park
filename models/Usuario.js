//Creando el modelo de usuario 
import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const Usuario = db.define('usuarios', {
    idUsuario: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nombre: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    a_paterno: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    a_materno: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    correo: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    placas: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    saldo: {
        type: DataTypes.INTEGER, 
    }, 
    token: DataTypes.STRING, 
    confirmado: DataTypes.BOOLEAN
})

export default Usuario