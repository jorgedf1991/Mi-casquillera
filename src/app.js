const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const mainRoute = require('./routes/main');

const app = express();



app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use('/', mainRoute);


const port = process.env.PORT || 3000;
app.listen( port, ()=> {
    console.log('puerto on ' + port);
})


