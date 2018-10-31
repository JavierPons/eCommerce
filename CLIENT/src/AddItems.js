import React from 'react';
import UploadImages from './UploadImages';



export default class AddItems extends React.Component{
    constructor(){
        super()
        this.state = {
                product:'',
                price:0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var product = this.refs.input1.value.trim()
        var price = this.refs.input2.value.trim()

        this.setState({product})
        this.setState({price})
        this.refs.input1.value =''
        this.refs.input2.value = ''
        //debugger
        fetch('http://localhost:3001/products/add', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              product_name:product, 
              price: price,
              
             // a:'something',
             // b:'something b ',
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                if(responseJson.error){
                }else {
                   // debugger
                    const productID= responseJson.done._id;
                    this.setState({productID})
				}
            }).catch((e)=>{
                debugger
            })


     }
        
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit.bind(this)} style={{display:'flex', justifyContent: 'center', flexFlow: 'row wrap', justifyContent:'center'}}>
                <h5>Product</h5>
                <input type='text' ref='input1' placeholder='Name of product'/>
                <h5>Price</h5>
                <input type='number' ref='input2' placeholder='Add price of product'/>
                <h5>Imagen</h5>
                
                <button type='submit'> + Add product</button>
                
            </form>

                <UploadImages 
                productID ={this.state.productID}
                getPhoto={this.handleSubmit} />
                </div>
                        )
    }


}