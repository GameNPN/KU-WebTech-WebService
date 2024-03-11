const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes); // Using adminRoutes for paths starting with '/admin'
app.use(shopRoutes); // Using shopRoutes for paths starting with '/'

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000)