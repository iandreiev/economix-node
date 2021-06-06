const Category = require('../models/category.model'),
      ErrorHandler = require('../utils/ErrorHandler.util')

module.exports.create = async(req,res) => {
    const cat = new Category(req.body)
    
    try{
        await cat.save()
        res.status(201).json(cat)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.get = async(req,res) => {
    try{
        let cats = await Category.find({})
        res.json(cats)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.getOne = async(req,res) => {
    try{
        let filter = {_id: req.params.id}

        let cat = await Category.findById(filter)

        res.json(cat)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.getOneAlias = async(req,res)=>{
    try{
        let cat = await Category.findOne({alias: req.params.alias})

        res.json(cur)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.edit = async(req,res) => {
    try{
        let cat = Category.findByIdAndUpdate(
            {_id: req.params.id},
            {$set:req.body},
            {new:true}
        )

        res.json(cat)
    }
    catch(e){
        ErrorHandler(res,e)
    }
}

module.exports.delete = async(req,res) => {
    try{
        await Category.findByIdAndDelete({_id: req.params.id})

        res.status(200).json({status:200, msg:'DELETE_SUCCESS'})
    }
    catch(e){
        ErrorHandler(res,e)
    }
}
