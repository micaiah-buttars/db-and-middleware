const express = require('express')
require('dotenv').config()

const {SERVER_PORT} = process.env

const app = express()
const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
// app.use(requestTime)

// function requestMiddleware(req, res, next){
//     if(req){
//         console.log("HI")
//     }
//     next()
// }

app.get('/', requestMiddleware, function (req, res) {
    res.send('Response')
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})