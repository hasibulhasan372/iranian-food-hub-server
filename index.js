const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');
const service = require ('./data/service.json')

app.get('/', (req, res) =>{
    res.send('Hello from Iranian Food')
})
app.use(cors());
// Get Chef data 
app.get('/chef',(req, res) =>{
    res.send(chef)
});
// Get Recipe Data 
app.get('/recipe', (req, res) =>{
    res.send(recipe)
});
// get recipe data by Id 
app.get('/recipe/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedRecipe = recipe.find(menu => menu.id === id);
    res.send(selectedRecipe)
});
// Get Chef Data by Id 
app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    if(id === "ifh_0"){
        res.send(recipe)
    }
    else{
        const chefRecipe = recipe.filter(menu => menu.chef_id === id)
        res.send(chefRecipe)
    }
})
// Get Service Data 
app.get('/service', (req, res) =>{
    res.send(service)
})

app.listen(port, () =>{
    console.log(`Iranian Food Hub API is running on port: ${port}`)
})