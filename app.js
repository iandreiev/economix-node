const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    path = require('path'),
    lib = './lib/routes/',
    api = '/api/'

// Router init
const currencyRoute = require(`${lib}currencies.routes`),
      categoryRoute = require(`${lib}categories.routes`),
      txsRoutess = require(`${lib}txs.routes`)

// App init
const keys = require('./lib/config/keys'),
      app = express()

mongoose.connect(keys.dbURL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Connected to DB: '+new Date()))
.catch(err=>console.error(err))

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(`${api}categories`, categoryRoute)
app.use(`${api}currencies`, currencyRoute)
app.use(`${api}txs`, txsRoutess)

module.exports = app