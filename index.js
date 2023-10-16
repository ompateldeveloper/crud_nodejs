const express =  require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = '4500'
const URI = '';


app.get("/",(req,res)=>{
    res.send('hello Rohit');
})

// need uri to work
// mongoose.connect(URI,()=>{

// })
app.listen(PORT,()=>{
    console.log(`listening on http://localhost:${PORT}/`);
})