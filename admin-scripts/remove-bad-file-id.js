var request = require('request');
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'chats.db',
    autoload: true
  });
db.findOne({
  doc_name: 'files'
}, function(err, doc) {
  if (doc) {
    idx = doc.files.indexOf('1_oPCCCglPj0EOpFpElrBBZuSXzl7xuzh');
    doc.files.splice(idx,1);
    doc.files_details.splice(idx,1);
    db.update({
      doc_name: 'files'
    }, doc, {}, function(err, numReplaced) {console.log("done");});
  }
});
