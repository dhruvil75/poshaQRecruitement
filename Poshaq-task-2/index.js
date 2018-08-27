const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mong = require('mongoose');

const webapp = express();

mong.connect('mongodb://admin:password1@ds133632.mlab.com:33632/poshaq',{ useNewUrlParser: true });



mong.Promise = global.Promise;
webapp.use(function(req,res,next){
    console.log(req.method + '\t' + req.originalUrl)
    next();
});

webapp.use(bodyParser.json());
webapp.use('/api', routes);

webapp.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d", this.address().port);
});