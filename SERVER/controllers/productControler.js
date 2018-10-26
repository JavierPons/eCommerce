const Product = require('../models/Product');

class ProductControler{
                    // ADD PRODUCT
    async add(req, res){
       
        return res.send('========== We got here! ==========')
       
        let { product_id, product_name, price,img } = req.body // when clickOn Buy buttom in react. How to connect this with UI?
        
            try{
                const done = await Product.create({
                    _id:'', 
                    product_name:product_name,
                    price: price,
                    img: img
                })
                res.send({done})
                
            }
            catch(e){
                res.send({e})
            }

    }

                    //DELETE PRODUCT

    async deleteProduct(req,res){
            let { product_id, product_name, price} = req.body // when clickOn Delete button. How to connect this with UI?
        try{
            const done = await Product.deleteOne({product_id:product_id, product_name:product_name, price:price})
            res.send({done})
        }
        catch(e){
            res.send({e})
        }

    }
            // FIND PRODUCT

    async products(req,res){
        

        try{
            const done = await Product.find({});
            res.send(done)
        }
        catch(e){
            res.send({e})
        }

    }
            // FIND SOME PRODUCT SOME ID

    async _findProductById(req,res){

        let { product_id } = req.body   // How to find by id in UI??
        
        try{
            const done = await Product.find({product_id:product_id})
            res.send({done});
        }
        catch(e){
            res.send({e})
        }
    } 


}

module.exports = new ProductControler();