const fs = require('fs');
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

app.get('/products/:id', (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    let id = (typeof req.params.id !== 'number') ? parseInt(req.params.id) : req.params.id;
    let filteredData = productData.filter( (product) => product.id === id)
    res.send(filteredData)
})

app.post('/checkout', (req, res) => {
    console.log(req.body);
    db.purchases.push(req.body);
    fs.writeFileSync('./data/db.json', JSON.stringify(db, null, '\t'));
    res.sendStatus(200);
})

module.exports = app;