
//server instantiate
//created instance of express
const express = require('express');
const app = express(); //named app of the instance

//used to parse req.body in express -> PUT or POST
const bodyParser=require('body-parser');

//specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());


//activate the server on 3000 port 
app.listen(3000, ()=>{ 
    console.log('server started at port no. 3000');
});

//Routes
app.get('/', (req, res)=>{
    res.send("Hello Everyone");
});


app.post('/api/cars', (req, res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    
    res.send('car submitted successfully');
})

