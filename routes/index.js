const express = require('express')
const noteRoute= require('./notes.js')
const app = express()

app.use('/api/notes', noteRoute)

module.exports = app