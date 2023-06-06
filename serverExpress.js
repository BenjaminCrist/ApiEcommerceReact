const express = require('express')
const index = require('./router/accueil')

const app = express()

app.set('views', './vue')
app.set('view engine',  'ejs')


app.use('/', index)
app.use(express.static('static'))
app.use(express.urlencoded({extended : true}))


app.listen(3000)