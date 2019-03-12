
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('unable to connect server');
    }

    console.log('connect mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c876dc3af637d24d0a3760b')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,2));
    // }, (err) =>{
    //     console.log('unable to reach',err);
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) =>{
    //     console.log('unable to reach',err);
    // });
    db.collection('usrs').find({name:'Andrew'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));

    });


});
    