const express = require('express');
var app = express();
const http = require('http');
var server = http.Server(app);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 

var db = require('./configs/db/migration/schemas/index');

const consign = require('consign');

consign()
    .include('src/routes')
    // .include('src/config/middlewares')
    .into(app);


//  /*{force: true}*/ 

db.sequelize.sync().then(function () {
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
        var addr = server.address();
        console.log("Connected to ", addr.address + ":" + addr.port);
    });
});