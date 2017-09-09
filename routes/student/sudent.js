var mongo=require('mongodb').MongoClient();
var express = require('express');
var app = express.Router();

var url = "mongodb://bodyguard:bodyguard2017@ds127994.mlab.com:27994/bodyguard";

//create document
app.get('/createDatabase', function(req, res, next) {
    mongo.connect(url,function (err,db) {
        if(err) throw err;
        db.createCollection("docStudent",function (err,res) {
            if (err) throw err;
            else console.log("Document is created");
            db.close();
        })
    });
});

app.get('/getStudentByParentID',function (req,res,next) {

    var result;
   // res.send(JSON.stringify({"NAME":"RINA"}));
        mongo.connect(url,function (err,db) {
            db.collection('docStudent').find({}).toArray(function (err,dbres) {
                if (err) throw err;
                else

              result=  JSON.stringify({"DATA":dbres});
             res.send(result);
                console.log(dbres);
            });
        });
});

module.exports =app;