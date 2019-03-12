// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);




MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('unable to connect server');

    }

    console.log('connect mongodb server');

});
    /*
    db.collection('Todos').insertOne({
        text:'something',
        completed: false
    },(err,result) => {
        if(err){
            return console.log('unable to insert', err);
        }
       console.log(JSON.stringify(result.ops, 2));
        
    });
    

    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 22,
        location:'amd'
    },(err,result) => {
        if(err){
            return console.log('unable to insert',err);
        }
        console.log(result.ops);
    });

    db.close();
});*/