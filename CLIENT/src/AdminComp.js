import React from 'react'
import AddItems from './AddItems'
export default class AdminComp extends React.Component {
    render(){
            return ( 
                <div>
               <h1 style={{paddingTop:'100px', textAlign:'center'}}>Admin Page!!!!!</h1>
                        <AddItems/>

               </div>
            )
    }
}