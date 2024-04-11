module.exports= (req,res,next)=>{
    if(!req.query.age){
        res.send('Please Age provide')
    }else if(req.query.age<18){
        res.send('Your Age not Access')
    }else{
        next();
    }
}