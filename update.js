const user = require('./mongodb');

const updateData = async () =>{
    const response = await user()
    const updateUser = await response.updateOne({name:"uday"},{$set:{Age:21}})
    if(updateUser.acknowledged){
        console.log('user update');
    }else{
        console.log(updateUser);
    }
}
updateData();