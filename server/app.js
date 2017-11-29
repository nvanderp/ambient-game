import express from 'express'

const app = express()

app.use('/', require('./routes'))

//app.use(express.static(path.join(__dirname, '..', 'public')))