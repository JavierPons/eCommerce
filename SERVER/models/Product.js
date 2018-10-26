const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    _id:{type:Schema.Types.ObjectId,required:true},
    product_name:{type:String, required:true},
    price:{type:Number, required:true},
    img:{type: String, require:true},
    
    
})


const Product = mongoose.model('Product', product);
module.exports = Product;