//https://www.lvzc.be/index.php/secretariaat/luchtruim/lfa-golf-status
var request = require('request');
var cheerio = require('cheerio');
url = 'https://www.lvzc.be/index.php/luchtruim/lfa-golf-status';
request(url, function(error, response, html) {
  if (!error) {
    var json = {};
    request('https://mister.mr-airspaces.cloud:8443/NoQTpyQstWqBIoUgRdBsgIWCu', function(error, response, html_out) {
      var j=JSON.parse(response.body);
      json.zones= j.zones;
      var $ = cheerio.load(html);
      $('td').filter(function() {
        // Let's store the data we filter into a variable so we can easily see what's going on.

        var data = $(this);

        bs = data.find('b');
        br = data.find('br');
        fo = data.find('font');
        if (bs.length == 1 && br.length == 1 && fo.length == 1) {
          zone = bs.text();
          status = fo.text();
          if (zone == 'Low Flying Area G1' && status != '') {
            json.zones.g1 = status;
          }
          if (zone == 'Low Flying Area G2 North' && status != '') {
            json.zones.g2n = status;
          }
          if (zone == 'Low Flying Area G2 West' && status != '') {
            json.zones.g2w = status;
          }
          if (zone == 'Low Flying Area G2 South' && status != '') {
            json.zones.g2s = status;
          }
          if (zone == 'Low Flying Area G5W' && status != '') {
            json.zones.g5w = status;
          }
          if (zone == 'Low Flying Area G5E' && status != '') {
            json.zones.g5e = status;
          }
        }

      });
      var clientServerOptions = {
        uri: 'https://mister.mr-airspaces.cloud:8443/NoQTpyQstWqBIoUgRdBsgIWCu',
        body: JSON.stringify(json),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      request(clientServerOptions, function(error, response) {
        return;
      });

    });

  }
});
