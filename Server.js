const express = require ('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('./routes/TodoRoute')

require("dotenv").config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors({
   origin:["https://todo-app-frontend-bcok.onrender.com"],
    methods:["GET","POST"],
    credentials:true
}))

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('connected to MongoDB...'))
.catch((err)=> console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
