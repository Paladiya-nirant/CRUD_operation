// express install

const express = require('express');
let app = express()
const body_parser = require('body-parser');



app.use(body_parser.urlencoded({extended:true}))

// middleware function
const middleware = (req, res) => {
    console.log('this is a middleware function');
      // middleware function
} 

middleware();

// route
app.get('/', (req, res) => {
    res.send('welcome to node');  //this message for output
})

app.get('/',route.index);
app.get('/about',route.about);
app.get('/edit',route.editDoc);

module.exports = {index, about, edit}

app.listen(3005,(req, res) => {
    console.log('server is running on port 3005');   //this message for console.log
})