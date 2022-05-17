const express = require('express')

const app = express()

app.get('/ping', (req, res) => res.send('pong'))

app.all("*", (req, res) => {
    res.send(`URL: ${req.originalUrl}`)
})

app.listen(3001, () => {
    console.log('app is listening on 3001')
})

