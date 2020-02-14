var request = require('request');
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'chats_list.db',
    autoload: true
  });

db.persistence.setAutocompactionInterval(500000)
chat_id = -220036654
url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + chat_id;
request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var jbody = JSON.parse(body);
    var doc = {
      doc_name: 'chats',
      chats: [chat_id],
      chats_details: [jbody]
    }
    other = -273108325
    url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + other;
    request(url, function(error, response, body) {
      var jbody = JSON.parse(body);
      doc.chats.push(other);
      doc.chats_details.push(jbody);
      db.insert(doc, function(err, newDoc) {
        console.log("ok");
      });
    });

  }
});
