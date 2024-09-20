const user = require('./mongodb');

const getUserData = async () =>{
    const data = await user();
    const allUser = await data.find().toArray()
    const singleName = allUser[1].name
    const singleUser = await data.find({name:singleName}).toArray()
    console.log(allUser);
    console.log('jjd')
    console.log(singleUser)
}

getUserData()