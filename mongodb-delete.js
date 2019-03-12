const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if (err) {
        return console.log('unable to connect server');
    }

    console.log('connect mongodb server'); 


    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);


    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
    });
});