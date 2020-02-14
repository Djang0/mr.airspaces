const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
var moment = require('moment');
var request = require('request');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = '/home/pi/golf-status-bot/token.json';

// Load client secrets from a local file.
fs.readFile('/home/pi/golf-status-bot/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
  const drive = google.drive({version: 'v3', auth});
  var now = moment();
  var twoDaysAgo = now.subtract(20, 'days').format().substring(0, 19);
  var todayyy = moment().format("YYYY-MM-DD")+"T00:00:00"
  console.log(twoDaysAgo);
  drive.files.list({
    pageSize: 100,
    fields: 'nextPageToken, files(id, name, webContentLink, modifiedTime)',
    q: "name contains 'OA.' and trashed = false and modifiedTime >= '"+todayyy+"'"
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    console.log("done");
    const file_list = [];
    if (files.length) {
      files.map((file) => {
        var file_id_obj ={file_id:file.id,fil_name:file.name,file_url:file.webContentLink, modifiedTime: file.modifiedTime}
        //call to has_file_id
        file_list.push(file_id_obj);
      });

    }
    var files_post ={files:file_list};
    var clientServerOptions = {
      uri: 'https://mister.mr-airspaces.cloud:8443/hnnvbzorycbskopikanobakidashiryu',
      body: JSON.stringify(files_post),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    request(clientServerOptions, function(error, response) {});
    console.log(file_list);
  });
}
