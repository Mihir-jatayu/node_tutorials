module.exports=data = (req,res,next)=>{
    if(req.query.user < 18){
        res.send('your age not vaild')
    }else{
        next();
    }
}