var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);

    }, (e) => {
        res.status(400).send(e);
    });
});



app.listen(3000, () => {
    console.log('started on port 3000');
});




























// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     },
//     completedAt:{
//         type: Number,
//         default: null
//     }

// });

// // var newTodo = new Todo({
// //     text: 'cook lunch'
// // });

// // newTodo.save().then((doc) => {
// //     console.log('save todo' , doc);
// // }, (e) => {
// //     console.log('unable to save')
// //     });

// var otherTodo = new Todo({
//     // text: 'feed cat',
//     // completed: true,
//     // completedAt: 123
//     text: 23    
// });
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, 2));
// }, (e) => {
//     console.log('unable to save',e);
// });

// var user = mongoose.model('user',{
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });

// var user = new user({
//     email: 'sem@exaple.com'
// });

// user.save().then((doc)=>{
//     console.log('user saved',doc);
// },(e) => {
//     console.log('unable to save',e)
    
// });

