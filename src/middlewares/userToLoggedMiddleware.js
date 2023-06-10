const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
            
            let emailInCookie = req.cookies.userEmail;
            
            if (emailInCookie) {
                db.User.findOne({ where: { email: emailInCookie } })
                .then(userFromCookie => {
                    if (userFromCookie) {
                        req.session.userLogged = userFromCookie;
                    }
                    
                    res.locals.isLogged = !!req.session.userLogged;
                
                next();
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    } else {
        next();
    }
}
 

module.exports = userLoggedMiddleware;