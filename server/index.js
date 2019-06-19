const express = require('express')
require('dotenv').config()



const controller = require('./controller')

const {SERVER_PORT} = process.env
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log('Hello World')
        next()
})


app.get('/test', controller.test)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})