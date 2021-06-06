const Cur = require('../models/currency.model'),
      ErrorHandler = require('../utils/ErrorHandler.util')

module.exports.create = async(req,res)=>{
    const cur = new Cur(req.body)

    try{
        await cur.save()
        res.status(201).json(cur)
    }
    catch(e){
    ErrorHandler(res,e)        
    }
}

module.exports.get = async(req,res)=>{
    try{
        let cur = await Cur.find({})

        res.json(cur)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.getOneId = async(req,res)=>{
    try{
        let cur = await Cur.findById({_id: req.params.id})

        res.json(cur)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.edit = async(req,res)=>{
    try{
        let cur = await Cur.findOneAndUpdate(
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
        await Cur.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({status:200, msg:'DELETE_SUCCESS'})
    }
    catch(e){
        ErrorHandler(res,e)
    }
}
