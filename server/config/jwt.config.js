const jwt = require('jsonwebtoken');

module.exports = { 

    authenticate(req,res, next){
        const secretToken = req.cookies.usertoken;

        if(!secretToken){
            return res.status(403).send()
        }
    
        let payload;

        try{

            payload = jwt.verify(secretToken, process.env.JWT_SECRET)
            next()

        }
        catch(err){
            return res.status(401).send()
        }



    }
}