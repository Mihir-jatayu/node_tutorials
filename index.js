const express = require('express');
const app =express();
const path = require('path');
const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.set('view engine','ejs');

app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/profile',(_,res)=>{
    const user ={
        name:'mihir',email:'mihirdave35@gmail.com'
    }
    res.render(`profile`,{user});
})

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})


app.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`);
})
app.listen(2409);

