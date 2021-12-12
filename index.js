import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Mommy is the best massager!!')
})

app.get('/hello', (req, res) => {
    res.send('I am with Hello!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running....'))