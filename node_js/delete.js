const user = require('./mongodb');

const deleteUser = async()=>{
    const response = await user()
    const deleteUser = await response.deleteMany({name:'uday'});
    if(deleteUser.acknowledged){
        console.log('user Delete');
    }
}

deleteUser();