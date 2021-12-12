import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Nami Node 1')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running....'))