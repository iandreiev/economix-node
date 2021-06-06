const mongoose = require('mongoose')

const cur_schema = new mongoose.Schema({
    ISO:{
        type:Object,
        code:{
            type:Number,
            default:0,
            required:true
        },
        name:{
            type:String,
            default:"",
            required:true
        }
    },
    title:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:new Date().getTime()
    }
})

module.exports = mongoose.model('currencies',cur_schema)