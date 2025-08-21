const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const routes = require('./Routes/Routes')
require('dotenv').config();
const cors = require('cors') // Load environment variables from .env file if it exists most important thing to do   

app.use(cors()) // Enable CORS for all routes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/image', express.static('uploads'))




// mongodb://localhost:27017/jwt
mongoose.connect('mongodb://127.0.0.1:27017/jwt')
    .then(() => console.log('Data base connected'))
    .catch((error) => console.log(error))


// Middleware to log request details

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', routes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))