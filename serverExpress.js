const express = require('express')


const app = express()


app.use('/', index)
app.use(express.json())


app.listen(3000)