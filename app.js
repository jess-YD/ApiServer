require('dotenv').config()

var express = requrie('express');
var app = express();
var yelp = requrie('./controllers/yelpcontrollwe');
var bodyParser = require('body-parser');



app.use(require('./middleware/headers'));





app.listen(process.env.PORT, function(req, res){
    console.log(process.env.PORT)
})