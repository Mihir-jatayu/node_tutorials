const { MongoClient } = require('mongodb');
const url_db = 'mongodb://localhost:27017';
const client = new MongoClient(url_db);

async function getData(collection_name){
    let result = await client.connect();
    let db = result.db('node_api_tutorial');
     return  db.collection(collection_name);
    
}

module.exports=getData;