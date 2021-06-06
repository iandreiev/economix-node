const Tx = require('../models/tx.model'),
      ErrorHandler = require('../utils/ErrorHandler.util')

module.exports.create = async(req,res)=>{
    const tx = new Tx(req.body)

    try{
        await tx.save()
        res.status(201).json(tx)
    }
    catch(e){
    ErrorHandler(res,e)        
    }
}

module.exports.get = async(req,res)=>{
    try{
        let tx = await Tx.find({})

        res.json(tx)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.getOneId = async(req,res)=>{
    try{
        let tx = await Tx.findById({_id: req.params.id})

        res.json(tx)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.edit = async(req,res)=>{
    try{
        let tx = await Tx.findOneAndUpdate(
            {_id: req.params.id},
            {$set:req.body},
            {new:true}
        )
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.delete = async(req,res)=>{
    try{
        await Tx.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({status:200, msg:'DELETE_SUCCESS'})
    }
    catch(e){
        ErrorHandler(res,e)
    }
}
