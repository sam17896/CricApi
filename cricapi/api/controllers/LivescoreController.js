/**
 * LivescoreController
 *
 * @description :: Server-side logic for managing livescores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
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
                console.log(JSON.stringify(completeResponse));
                parseString(completeResponse, function (err, result) {
                    res.send(result);
                });                
                
            })
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        //res.send(doc)
    },
};

