const request = require('request')
var cheerio = require('cheerio');

url = 'http://mids.be/fat/fat.php';

request(url, function(error, response, html) {
  if (!error) {
    var $ = cheerio.load(html);
    const file_list = [];
    var file1 =  $('#select_oa_url option').eq(1).attr('value');
    var file2 =  $('#select_oa_url option').eq(2).attr('value');
    console.log($.root().html());
    var qnh = Number($('#infos_qnh_qra font[color=blue]').text().substr(10,4));
    file_list.push({name:file1,qnh:qnh,amsl:'https://bot-histo.herokuapp.com/file/'+file1+'/'+qnh+'/Meter_Level',fl:'https://bot-histo.herokuapp.com/file/'+file1+'/'+qnh+'/Flight_Level'});
    file_list.push({name:file2,qnh:qnh,amsl:'https://bot-histo.herokuapp.com/file/'+file2+'/'+qnh+'/Meter_Level',fl:'https://bot-histo.herokuapp.com/file/'+file2+'/'+qnh+'/Flight_Level'});
    var files_post ={files:file_list};
    
  }
});
