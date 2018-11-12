import React from 'react';
import UploadImages from './UploadImages';

export default class AddPhoto extends React.Component{

    render(){

        return(

            <UploadImages 
                productID ={this.state.productID}
                getPhoto={this.handleSubmit} />
        )
    }

}