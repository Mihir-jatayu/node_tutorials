const express = require('express');
const reqFilter = require('./middleware');
const app =express();
const path = 

('path');
const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));
app.set('view engine','ejs');
const route = express.Router();

// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// })

route.use(reqFilter)

app.get('/',(req,res)=>{
    res.render(`login`);
})
route.get('/profile',(req,res)=>{
    const user ={
        name:'mihir',
        email:'mihirdave35@gmail.com',
        skils:['php','java','nodeJS','react','ajax']
    }
    res.render(`profile`,{user})
})

route.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

route.get('/help',(_,res)=>{
    res.sendFile(`${publicPath}/help.html`);
})
app.use('/',route);


app.listen(2409);

