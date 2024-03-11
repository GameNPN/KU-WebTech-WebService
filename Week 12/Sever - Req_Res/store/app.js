const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes); // Using adminRoutes for paths starting with '/admin'
app.use(shopRoutes); // Using shopRoutes for paths starting with '/'

app.listen(3000)