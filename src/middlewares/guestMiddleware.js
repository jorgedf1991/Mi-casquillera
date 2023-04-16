 let guestMiddleware = (req, res, next) => {
    if(req.session.userLogged){
        return res.send('No puedes ir alli')
    }
    next();
}

module.exports = guestMiddleware;