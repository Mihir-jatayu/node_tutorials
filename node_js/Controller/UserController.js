const collection_name = 'user';
const dbconnect = require('../mongodb');


module.exports.getUserList = async (req,res)=>{
    const response = await dbconnect(collection_name);
    const userData = await response.find().toArray();
   return res.send(userData);
}

module.exports.addUser = async (req,res)=>{
    const response = await dbconnect(collection_name);
    const lastUser = await response.find().sort({ _id: -1 }).limit(1).toArray();
    const newId = lastUser.length > 0 ? lastUser[0]._id + 1 : 1;
    const userData = await response.insertOne({
        _id: newId,
        name:req.body.name,
        last_name:req.body.last_name,
        Age:req.body.Age,
        role_id:req.body.role_id
    });
    if(userData.acknowledged){
        return  res.send('User Added');
    }else{
        return  res.send(`User Not Added ${userData}`);
    }
}

module.exports.updateUser = async (req,res)=>{
    const response = await dbconnect(collection_name);
    const userData = await response.updateOne({name:req.body.name},
        {$set:{last_name:req.body.last_name,Age:req.body.Age}});
    if(userData.acknowledged){
        return  res.send('User Updated Successfully');
    }else{
        return  res.send(`User Not Updated ${userData}`);
    }
}


module.exports.deleteUser = async (req,res)=>{
    const response = await dbconnect(collection_name);
    const userData = await response.deleteOne({name:req.body.name});
    if(userData.acknowledged){
        return  res.send('User Deleted Successfully');
    }else{
        return  res.send(`User Not Deleted ${userData}`);
    }
}