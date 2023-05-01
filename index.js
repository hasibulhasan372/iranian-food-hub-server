const express = require('express');
const app = express();
const port = 5000;
const chef = require('./data/chef.json')

app.get('/', (req, res) =>{
    res.send('Hello from Iranian Food')
})
app.get('/chef',(req, res) =>{
    res.send(chef)
})
app.listen(port, () =>{
    console.log(`Iranian Food Hub API is running on port: ${port}`)
})