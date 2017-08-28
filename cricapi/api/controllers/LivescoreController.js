/**
 * LivescoreController
 *
 * @description :: Server-side logic for managing livescores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var https = require('https')
var http = require('http')
var parseString = require('xml2js').parseString;

module.exports = {
	list : function(req,res){
        var url = 'http://localhost:1337/synd.cricbuzz.com/j2me/1.0/livematches.xml';
    
        var gsaReq = http.get(url, function (response) {
            var completeResponse = '';
            response.on('data', function (chunk) {
                completeResponse += chunk;
            });
            response.on('end', function() {
              //  console.log(JSON.stringify(completeResponse));
                parseString(completeResponse, function (err, result) {
                    res.send(result);
                });                
                
            })
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        //res.send(doc)
    },
    series: function(req,res){
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.upcoming&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=';
        var gsaReq = https.get(url, function (response) {
            var completeResponse = '';
            response.on('data', function (chunk) {
                completeResponse += chunk;
            });
            response.on('end', function() {
              //  console.log(JSON.stringify(completeResponse));
                res.send(completeResponse);
            })
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
    },
    ongoingseries:function(req,res){
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.ongoing&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=';
        var gsaReq = https.get(url, function (response) {
            var completeResponse = '';
            response.on('data', function (chunk) {
                completeResponse += chunk;
            });
            response.on('end', function() {
              //  console.log(JSON.stringify(completeResponse));
                res.send(completeResponse);
            })
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
    }
};

