const express = require('express')
const {pageAccueil} = require('../controller/index')
const index = express.Router()

index.get('/', pageAccueil)

module.exports = index;