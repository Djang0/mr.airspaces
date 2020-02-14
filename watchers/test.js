

var tr = require('tor-request');
tr.TorControlPort.password = 'C4ps1deRul3s'

tr.renewTorSession(function (err, success) {
      if(err){
        console.log(err);
      }
    });
tr.request('https://mister.mr-airspaces.cloud:8443/UZeLvHozfhwsL53eoAjetEYvdljzzZZZ', function (err, res, body) {
  
});
