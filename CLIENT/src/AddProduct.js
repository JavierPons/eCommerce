import React from 'react';


const item = {
    padding: '4%',
}
export default class AddProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            price1: 14,
            price2: 22,
            price3: 17,
            price4: 44,
            total:0
        }
       
    }
    
 addPrice = (price) =>{
        let oldPrice = this.state.total;
            oldPrice += price
        this.setState({total:oldPrice});
   }
    render(){
        return(
            <div style={{display:'flex', justifyContent: 'center', flexFlow: 'row wrap', justifyContent:'center'}}>
                <div style={item}>
                    <h5>Queso</h5>
                    <img style={{width:'200px', height:'200px'}} src={require("./Image/queso.jpg")} alt="queso"/>
                    <p>Origen: Espana </p>
                    <p>Precio: {this.state.price1}€</p>
                    <button onClick={()=>this.addPrice(this.state.price1)}>Comprar</button>
                </div>
                <div style={item}>
                    <h5>Vino</h5>
                    <img style={{width:'200px', height:'200px'}}src={require("./Image/vino.jpg")} alt="vino"/>
                    <p>Origen: Espana </p>
                    <p>Precio: {this.state.price2}€</p>
                    <button onClick={()=>this.addPrice(this.state.price2)}>Comprar</button>
                </div>
                <div style={item}>
                    <h5>Salchichón de Jabalí</h5>
                    <img style={{width:'200px', height:'200px'}} src={require("./Image/jabali.jpg")} alt="salchichon jabali"/>
                    <p>Origen: Espana </p>
                    <p>Precio: {this.state.price3}€</p>
                    <button onClick={()=>this.addPrice(this.state.price3)}>Comprar</button>
                </div>
                <div style={item}>
                    <h5>Casa Rural</h5>
                    <img style={{width:'200px', height:'200px'}} src={require("./Image/rural.jpg")} alt="casa rural"/>
                    <p>Origen: Espana </p>
                    <p>Precio: {this.state.price4}€/noche</p>
                    <button onClick={()=>this.addPrice(this.state.price4)}>Comprar</button>
                </div>
                            <div>{this.state.total}</div>
            </div>
        )
    }
}