const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
            
            let emailInCookie = req.cookies.userEmail;
            
            if (emailInCookie) {
                db.User.findOne({ where: { email: emailInCookie } })
                .then(userFromCookie => {
                    if (userFromCookie) {
                        req.session.userLogged = userFromCookie;
                    }
                    
                    if (req.session && req.session.userLogged) {
                        res.locals.isLogged = true;
                    }
    
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