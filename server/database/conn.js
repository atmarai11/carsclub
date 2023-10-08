const mongoose = require('mongoose');


const DB = process.env.DATABASE;

mongoose.connect('mongodb://127.0.0.1:27017/carclubs', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then( ()=>{

    console.log('connection successful');

}).catch( (err)=>{

    console.log('no connection');

});

