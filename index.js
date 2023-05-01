const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Hello from Iranian Food')
})

app.listen(port, () =>{
    console.log(`Iranian Food Hub API is running on port: ${port}`)
})