const {MongoClient}=require("mongodb");

const URI="mongodb+srv://dillibabu_R:mongodbaccessgranted@cluster0.xjysbg6.mongodb.net/"

const client=new MongoClient(URI);
const dbName="NodeTutorial";

async function main(){
        await client.connect();
        console.log("Connected Successfully to server");
        const db=client.db(dbName);
        const collection=db.collection('user');
        const result=await collection.find({}).toArray();
        console.log("Data Present inside the database:",result);
        return 'completed';
}
main().
then(console.log)
.catch(console.error)
.finally(()=>client.close())