console.log('Is this thing on?')
const express = require('express')

const PORT = process.env.PORT || 5000

const server = express();

server.use(express.json());

server.get('/api/*', (req, res) =>{
    res.json({
        bestanimecharacter: 'Deku',
    })
})


server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})