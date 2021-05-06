require('dotenv').config()
const path = require('path')
console.log('Is this thing on?')
const express = require('express')

const PORT = process.env.PORT || 5000

server.use(express.static(path.join(__dirname, 'client/build')))

const server = express();

server.use(express.json());

server.get('/api/*', (req, res) =>{
    res.json({
        favAnime: 'MHA',
    })
})

server.use('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client/build/', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})