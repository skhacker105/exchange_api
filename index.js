const express = require('express');
const app = express();
const apiConnections = require('./api/connection');
const cors = require('cors');
const mongo = require('./db/mongodb');
var multer = require('multer');
var upload = multer();

mongo.connectToServer(err => {
  if (err) console.log('DB connection error = ', err);
  else console.log('DB Connection successful')
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));

app.use('/users', apiConnections);

app.get('/', function (req, res) {
   res.send('Exchange API Working');
});

var server = app.listen(3500, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});