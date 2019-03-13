var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={mongoose};

// "test": "echo \"Error: no test specified\" && exit 1",