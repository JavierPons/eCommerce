var jwt				 = require('jsonwebtoken'),
	config           = require('../configs');
// ======================MIDDLEWARE====================== \\
var isLoggedIn = (req, res, next)=>{
	var token = req.headers.authorization
	if(token){
	  	try {
			const decoded = jwt.verify(JSON.parse(token), config.secret) 
			req.token     = token
            req.user      = decoded;
            if(decoded){
				console.log('we are in business!')
                return next();
            }
	  	} 
	  	catch(error) { 
		  	res.json ({error:error})
	  	}	 
	}


}
module.exports = isLoggedIn;