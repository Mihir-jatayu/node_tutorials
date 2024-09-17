const user = require('./mongodb');

const insert = async() =>{
    const db = await user()
    const insert = await db.insertOne({
        name:'uday',
        last_name:'tank',
        Age:'24',
    });

   if(insert.acknowledged){
    console.log('Data Insertd')
   }
}
insert();