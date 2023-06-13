//En este archivo se almacenaran las rutas exclusivamente del registro de usuarios 
import express from 'express'
import { inicio } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/inicio', inicio)

export default router