import express from 'express'

import {indexPage, altPage} from '../controllers/index.js'


let router = express.Router()

export function configureRoutes(app){
    router.get('/', indexPage)
    router.get('/alt', altPage)
    app.use('/', router)
}