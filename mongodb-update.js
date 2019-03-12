const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('unable to connect server');
    }

    console.log('connect mongodb server'); 

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c876dc3af637d24d0a3760b')
    },{
        $set:{
            name : 'sem'
         },$inc:{
                 age : 1
             }

    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
     
    });



});