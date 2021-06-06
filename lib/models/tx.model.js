const mongoose = require('mongoose')

const tx_schema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
        default: 0
    },
    currency:{
        type:String,
        required: true,
        default:'eur'
    },
    category:{
        type:String,
        required:false
    },
    created_at:{
        type:Date,
        default: new Date().getTime()
    },
    last_edit:{
        type:Date
    },
    payload:{
        type:String,
        default:"",
        min:3,
        max:255
    }
})

module.exports = mongoose.model('txs',tx_schema)