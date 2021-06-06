const mongoose = require('mongoose')

const cat_schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    alias:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default: new Date().getTime()      
    }
})

module.exports = mongoose.model('cats',cat_schema)