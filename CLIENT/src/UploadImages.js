import React from 'react'
import widgetStyle from './widgetStyle';

export default class UploadImages extends React.Component{
		constructor(){
			super()
			this.state = {
				apiInfo: 'default'
			}
		}
		

	uploadWidget = () => {
		

        window.cloudinary.openUploadWidget({ 
        	cloud_name: 'antonello', 
        	upload_preset: 'ecommerce', 
			tags:['user'],
			stylesheet:widgetStyle
        },
            (error, result)=> {
				debugger
                if(error){
					debugger
                }else{
					console.log(result);
					fetch('http://localhost:3001/products/add', {
	 					method: 'POST',
	 					headers: {
						 Accept: 'application/json',
	 					  'Content-Type': 'application/json'
					},
	 					body: JSON.stringify({
							photo_url:result[0].secure_url, 
							public_id:result[0].public_id				   			   
	 					}),
						 }).then((response)=> {
								if(!response.ok){
									throw Error(response.statusText)
								}else{
						 
							response.json()
								}
						 }
						 )
						 		
	 						.then((responseJson) => {
								
	 							console.log('===>',responseJson, '<====')
	 					}).catch((e)=>{
	 						debugger
	 					})
            	}
			})
	}
	 					
	render(){
		
		return (
			<div className="flex_upload">
                <div className="upload">
					<button className ="button_small"
                    	onClick={this.uploadWidget} > click me
                    </button>
                </div>
            </div>
		)
	}
}
