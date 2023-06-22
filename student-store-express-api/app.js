const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./data/db.json')

let productData = [...db.products];

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200);
    res.send(productData)
})

app.post('/products/:id', (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    let id = (typeof req.body.id !== 'number') ? parseInt(req.body.id) : req.body.id;
    let filteredData = productData.filter( (product) => product.id === id)
    res.send(filteredData)
})

module.exports = app;