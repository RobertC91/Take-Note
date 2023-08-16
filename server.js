const express = require('express')
const app = express()
const PORT = 3001
const path = require('path')
const api = require('./routes/index.js')

// Middleware for parsing JSON and urlended form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
app.use(express.static('public'))

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
)

// GET Route for Notes page
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
)

// WILDCARD Route for homepage
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
)

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)