function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = !!req.session.userLogged;

    // if (req.session.userLogged) {
    //     res.locals.isLogged = true
    // }else{
    //     res.locals.isLogged = false
    // }

    // res.locals.isLogged = req.session.userLogged ? true : false
    
    next();
}

module.exports = userLoggedMiddleware;