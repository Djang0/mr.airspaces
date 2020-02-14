var request = require('request');
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'chats.db',
    autoload: true
  });
db.findOne({
  doc_name: 'chats'
}, function(err, doc) {
  if (doc) {
    doc.chats_details = [];
    doc.chats.forEach(function(item, index, array) {
      url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + item ;
      request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          var jbody = JSON.parse(body);
          doc.chats_details.push(jbody);
          db.update({
            doc_name: 'chats'
          }, doc, {}, function(err, numReplaced) {
            console.log('chats updated');
          });
        }
      });
    });
  }
});
