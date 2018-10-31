const Product = require('../models/Product');
//import AddItems from '../../CLIENT/src/AddItems';
class ProductControler{
                    // ADD PRODUCT
    async add(req, res){
       console.log('Hello from the add route!')
       // return res.send('========== We got here! ==========')
       
        let {  product_name, price } = req.body 
        
            try{
                const done = await Product.create({
                    product_name:product_name,
                    price: price
                    
                })
                console.log('succes',done)
                
                res.send({done})

            }
            catch(e){
                console.log('e',e)
                res.send({e})
            }
           
    }

    async updateProduct(req,res){
        let { image, productID } = req.body
        console.log('image', image, 'product_id', productID);
        try{
            const done = await Product.update({_id:productID},{
              $set:{
                  image:image
              }  
            })
            console.log('=================================:',done)
            res.send({done});

        }catch(e){
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