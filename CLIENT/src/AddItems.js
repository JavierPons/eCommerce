import React from 'react';
import UploadImages from './UploadImages';
import { Redirect } from 'react-router-dom';



export default class AddItems extends React.Component{
    constructor(){
        super()
        this.state = {
                product:'',
                price:0
        }
    }
    // handleNewPage (){
    //     return <Redirect to='./AddPhoto.js'/>
    // }

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
                //debugger
            })


     }
    
        
    render(){
        //let img = './Image/cesta.jpg'
        return(
            <div style={{display:'flex', justifyContent: 'center', flexFlow: 'row wrap', justifyContent:'center'}}>
            <form onSubmit={this.handleSubmit.bind(this)} style={{backgroundColor:'rgba(255, 255, 128, .5)', padding:"50px"}}>
                <h5 style={{paddingRight:"20px"}}>Product</h5>
                <input type='text' ref='input1' placeholder='Product name'/>
                <h5 style={{paddingRight:"20px"}}>Price</h5>
                <input type='number' ref='input2' placeholder='Product price'/>
                <h5>Add Imagen</h5>
                <UploadImages 
                productID ={this.state.productID}
                getPhoto={this.handleSubmit} />
                 <button type='submit' oncl> + Add product</button>
            </form>

               
                </div>
                        )
    }


}