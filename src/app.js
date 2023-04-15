const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();



app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({ secret : 'top secret' }));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

const port = process.env.PORT || 3000;
app.listen( port, ()=> {
    console.log('puerto on http://localhost:' + port);
})


