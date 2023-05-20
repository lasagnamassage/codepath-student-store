const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
    res.status(200);
    res.send({ping: "pong"})
})

app.get('/store', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    const options = {
        root: path.join(__dirname)
    };
 
    res.sendFile('./data/db.json', options, (error) => {
        if(error){
            console.log(error);
            return;
        }
    })
})

app.get('/store/:prodictId', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile('./data/db.json', 'utf8', (error, data) => {
        if(error){
            // console.log(error);
            res.send(error);
            return;
        }
        // console.log(JSON.parse(data));
        res.send(data)
    })
})

module.exports = app;