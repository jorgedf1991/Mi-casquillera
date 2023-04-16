function authMiddleware(req, res, next) {
    if(!req.session.userLogged){
        return res.send('/user/login')
    }
    next();
}

module.exports = authMiddleware;