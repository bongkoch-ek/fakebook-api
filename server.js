require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use.use(cors())
app.use(express.json())

app.use('/auth' ,()=>{})
app.use('/post' ,()=>{})
app.use('/comment' ,()=>{})
app.use('/like' ,()=>{})


const port = process.env.PORT || 8800
app.listen(port, () => console.log("server run on port", port))