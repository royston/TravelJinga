var express = require('express');
var router = express.Router();
var SabreDevStudio = require('../lib/sabre-dev-studio');
var cred = require('T:/data/udaanApp/sabreCred.json');

var sabreDevStudio = new SabreDevStudio({
  client_id: cred.client_id,
  client_secret: cred.client_secret,
  uri:           'https://api.test.sabre.com'
});
var options = {};



/* GET home page. */
router.get('/', function(request, res, next){
  console.log(cred);
  request = '/v1/lists/supported/countries';
  options = {
    // destination: 'GIG',
    // destinationcountry: 'BR',
      // originregion: 'NORTH AMERICA'
    pointofsalecountry: 'US'
    // destinationregion: 'LATIN AMERICA',
    // pointofsalecountry: 'BR'
  };
  sabreDevStudio.get(request, options, function(err, data) {
    if(err){
      res.status(200).send({
        'status': false,
        'message': 'Error',
        'info': err
      });
    }else{
      res.status(200);
      res.write(data);
      res.end();
      // res.write('index', { title: data });
    }
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
