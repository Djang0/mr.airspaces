var fs = require('fs');
var https = require('https');
var request = require('request');
const express = require('express')
var cors = require('cors')
const path = require('path')
var bodyParser = require('body-parser');
var moment = require('moment');
const PORT = 8443
const token = '708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM';
var async = require("async");
var locale_lst = ['en'];
var locales = JSON.parse(fs.readFileSync('locales/data.json', 'utf8'));

const log = require('simple-node-logger').createSimpleLogger('project.log');
log.setLevel('info');
log.info('test');
var q = async.queue(function(task, done) {
  request(task.url, function(err, res, body) {
    if (err) return done(err);
    if (res.statusCode != 200) return done(res.statusCode);
    done();
  });
}, 5);

//var main_menu_keyboard = [["/sites","/oa","/golf"],["/flyable","/xcable","/forecast"],["/meteo","/paymeabeer","/father"],["/help","/close","toto"]];
var main_menu_keyboard = [["/sites","/oa","/golf"],["/flyable","/xcable","/forecast"],["/meteo","/paymeabeer","/father"],["/help","/close"]];
var inline_menu = [[{text:"/clear", callback_data: "data_back clear"},{text:"b", callback_data: "data_back b"}],[{text:"c", callback_data: "data_back c"},{text:"d", callback_data: "data_back d"}]];


var meteo_menu_buttons = [];
var forecast_menu_buttons = [];
var main_menu={
  keyboard: main_menu_keyboard,
  resize_keyboard: true,
  one_time_keyboard: true
};
var meteo_menu ={};
var forecast_menu ={};

var privateKey = fs.readFileSync('sslcert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/fullchain.pem', 'utf8'); // sudo certbot renew

var credentials = {
  key: privateKey,
  cert: certificate
};


var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'chats.db',
    autoload: true
  });

db.persistence.setAutocompactionInterval(500000)
var activity_log = {};
get_activity_log();
function _(key,locale){
  var value = ""
  locales[locale].some(function(item) {
    if (item.key==key) {
      value=item.value;
      return true;
    }else{
      return false
    }
  });
  return value;
}



function assert_locale(locale){
  if (locale_lst.indexOf(locale)!=-1) {
    return true;
  }else{
    return false;
  }
}
function send_meteo_if_appliccable(chat_id, verb) {

  db.findOne({
    doc_name: 'waiting_meteo'
  }, function(err, doc) {
    if (doc) {

      idx = doc.chats.indexOf(chat_id);
      if (idx >= 0) {
        doc.chats.splice(idx, 1)
        db.update({
          doc_name: 'waiting_meteo'
        }, doc, {}, function(err, numReplaced) {
          db.findOne({
            doc_name: 'sites'
          }, function(err, doc) {
            if (doc) {
              found = false
              doc.sites.forEach(function(it, id, arr) {
                if (it.name.toLowerCase() == verb) {
                  if (it.meteo.id == 0) {
                    txt = "I didn't receive any data for this site yet."
                  } else {
                    //txt = JSON.stringify(it.meteo);
                    txt = ""
                    if (it.meteo.hasOwnProperty('weather')) {
                      if (it.meteo.weather.hasOwnProperty('description')) {
                        txt += it.meteo.weather.description + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('main')) {
                      if (it.meteo.main.hasOwnProperty('temp')) {
                        txt += "Temp. " + it.meteo.main.temp + " celsius" + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('main')) {
                      if (it.meteo.main.hasOwnProperty('humidity')) {
                        txt += "Humidity " + it.meteo.main.humidity + " %" + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('wind')) {
                      if (it.meteo.wind.hasOwnProperty('speed')) {
                        txt += "Wind speed " + it.meteo.wind.speed + " m/s" + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('wind')) {
                      if (it.meteo.wind.hasOwnProperty('deg')) {
                        txt += "Wind direct. " + it.meteo.wind.deg + " degrees" + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('clouds')) {
                      if (it.meteo.clouds.hasOwnProperty('all')) {
                        txt += "Cloudiness " + it.meteo.clouds.all + " %" + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('sys')) {
                      if (it.meteo.sys.hasOwnProperty('sunrise')) {
                        txt += "Sunrise " + moment(it.meteo.sys.sunrise * 1000).format('HH:mm:ss') + '\n';
                      }
                    }
                    if (it.meteo.hasOwnProperty('sys')) {
                      if (it.meteo.sys.hasOwnProperty('sunset')) {
                        txt += "Sunset " + moment(it.meteo.sys.sunset * 1000).format('HH:mm:ss') + '\n';
                      }
                    }

                    txt += '\n' + "These info are provided by openweathermap.org."
                  }

                  talk_to_chat_text_remove_kb(chat_id, txt);
                  found = true;

                }
                if (id == arr.length - 1) {
                  if (!found) {
                    txt = verb + " is not one of the flying site I'm monitoring..."
                    talk_to_chat_text_remove_kb(chat_id, txt);
                  }
                }
              })

            }
          });
        });

      }

    }
  });
}
function send_forecast_if_appliccable(chat_id, verb) {

  db.findOne({
    doc_name: 'waiting_forecast'
  }, function(err, doc) {
    if (doc) {

      idx = doc.chats.indexOf(chat_id);
      if (idx >= 0) {
        doc.chats.splice(idx, 1)
        db.update({
          doc_name: 'waiting_forecast'
        }, doc, {}, function(err, numReplaced) {
          db.findOne({
            doc_name: 'sites'
          }, function(err, doc) {
            if (doc) {
              found = false
              doc.sites.forEach(function(it, id, arr) {
                if (it.name.toLowerCase() == verb) {
                  if (it.ai_forecast.length == 0) {
                    txt = "I didn't receive any data for this site yet."
                  } else {

                    txt = ""
                    it.ai_forecast.forEach(function(ai_item,ai_id,ai_arr){

                      var dt = ai_item.date;
                      var xc = (ai_item.forecast.XC * 100).toFixed(2) ;
                      var fly = (ai_item.forecast.fly * 100).toFixed(2) ;
                      txt += "*On : "+dt+"*"+'\n';
                      ai_item.ow_forecasts.forEach(function(ow_item,ow_id,ow_arr){
                        var tm = ow_item.time;
                        var desc = ow_item.desc;
                        var speed  = ow_item.wind_speed;
                        if (ow_item.fly_ok) {
                          txt += " *"+tm+"* _flyable:"+fly+"%, xc:"+xc+"%, wind:"+speed+" m/s, "+desc+"_"+'\n';
                        }else{
                          txt += " *"+tm+" site not flyable *, _"+desc+"_"+'\n';
                        }
                      });
                    });
                    txt += '\n' + "These info are provided by openweathermap.org and paraglidable.com."
                  }

                  talk_to_chat_text_remove_kb(chat_id, txt);
                  found = true;

                }
                if (id == arr.length - 1) {
                  if (!found) {
                    txt = verb + " is not one of the flying site I'm monitoring..."
                    talk_to_chat_text_remove_kb(chat_id, txt);
                  }
                }
              })

            }
          });
        });

      }

    }
  });
}

function send_forecast(chat_id, site_name) {
  db.findOne({
    doc_name: 'sites'
  }, function(err, doc) {
    if (doc) {
      found = false
      doc.sites.forEach(function(it, id, arr) {
        if (it.name.toLowerCase() == site_name.toLowerCase()) {
          if (it.ai_forecast.length == 0) {
            txt = "I didn't receive any data for this site yet."
          } else {

            txt = ""
            it.ai_forecast.forEach(function(ai_item,ai_id,ai_arr){

              var dt = ai_item.date;
              var xc = (ai_item.forecast.XC * 100).toFixed(2) ;
              var fly = (ai_item.forecast.fly * 100).toFixed(2) ;
              txt += "*On : "+dt+"*"+'\n';
              ai_item.ow_forecasts.forEach(function(ow_item,ow_id,ow_arr){
                var tm = ow_item.time;
                var desc = ow_item.desc;
                var speed  = ow_item.wind_speed;
                if (ow_item.fly_ok) {
                  txt += " *"+tm+"* _flyable:"+fly+"%, xc:"+xc+"%, wind:"+speed+" m/s, "+desc+"_"+'\n';
                }else{
                  txt += " *"+tm+" site not flyable *, _"+desc+"_"+'\n';
                }
              });
            });
            txt += '\n' + "These info are provided by openweathermap.org and paraglidable.com."
          }

          talk_to_chat_text_with_kb(chat_id, txt,main_menu);
          found = true;

        }
        if (id == arr.length - 1) {
          if (!found) {
            txt = site_name + " is not one of the flying site I'm monitoring..."
            talk_to_chat_text_with_kb(chat_id, txt,main_menu);
          }
        }
      })

    }
  });
}
function send_meteo(chat_id, site_name) {
  db.findOne({
    doc_name: 'sites'
  }, function(err, doc) {
    if (doc) {
      found = false
      doc.sites.forEach(function(it, id, arr) {
        if (it.name.toLowerCase() == site_name.toLowerCase()) {
          if (it.meteo.id == 0) {
            txt = "I didn't receive any data for this site yet."
          } else {
            //txt = JSON.stringify(it.meteo);
            txt = ""
            if (it.meteo.hasOwnProperty('weather')) {
              if (it.meteo.weather.hasOwnProperty('description')) {
                txt += it.meteo.weather.description + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('main')) {
              if (it.meteo.main.hasOwnProperty('temp')) {
                txt += "Temp. " + it.meteo.main.temp + " celsius" + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('main')) {
              if (it.meteo.main.hasOwnProperty('humidity')) {
                txt += "Humidity " + it.meteo.main.humidity + " %" + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('wind')) {
              if (it.meteo.wind.hasOwnProperty('speed')) {
                txt += "Wind speed " + it.meteo.wind.speed + " m/s" + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('wind')) {
              if (it.meteo.wind.hasOwnProperty('deg')) {
                txt += "Wind direct. " + it.meteo.wind.deg + " degrees" + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('clouds')) {
              if (it.meteo.clouds.hasOwnProperty('all')) {
                txt += "Cloudiness " + it.meteo.clouds.all + " %" + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('sys')) {
              if (it.meteo.sys.hasOwnProperty('sunrise')) {
                txt += "Sunrise " + moment(it.meteo.sys.sunrise * 1000).format('HH:mm:ss') + '\n';
              }
            }
            if (it.meteo.hasOwnProperty('sys')) {
              if (it.meteo.sys.hasOwnProperty('sunset')) {
                txt += "Sunset " + moment(it.meteo.sys.sunset * 1000).format('HH:mm:ss') + '\n';
              }
            }

            txt += '\n' + "These info are provided by openweathermap.org."
          }

          talk_to_chat_text_with_kb(chat_id, txt,main_menu);
          found = true;

        }
        if (id == arr.length - 1) {
          if (!found) {
            txt = site_name + " is not one of the flying site I'm monitoring..."
            talk_to_chat_text_with_kb(chat_id, txt, main_menu);
          }
        }
      })

    }
  });
}
// if we need mass request emission
function push_to_q(chat_id, text) {
  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text + "&parse_mode=Markdown";
  q.push({
    url: url
  });
}

function get_url(chat_id, text) {
  return 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text + "&parse_mode=Markdown";
}
function get_url_with_kb(chat_id, text,kb) {
  return 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text + "&parse_mode=Markdown"+"&reply_markup="+JSON.stringify(kb);
}
function talk_to_chat(chat_id, text) {

  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text + "&parse_mode=Markdown";
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);

    }
  });
}

function talk_to_chat_text(chat_id, text) {

  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);

    }
  });
}
function talk_to_chat_text_remove_kb(chat_id, text) {

  j ={remove_keyboard:true}
  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text+"&reply_markup="+JSON.stringify(j)+ "&parse_mode=Markdown";
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);

    }
  });
}

function talk_to_chat_text_with_kb(chat_id, text,kb) {
  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + text+"&reply_markup="+JSON.stringify(kb)+ "&parse_mode=Markdown";
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);

    }
  });
}
function get_activity_log(){
  db.findOne({
    doc_name: 'history'
  }, function(err, doc) {

    if (doc) {
      activity_log = doc;
      if(!activity_log.history.hasOwnProperty("forecast")){
        activity_log.history.forecast=[];
      }
    }else{
      empty = {
        "flyable":[],
        "xcable":[],
        "sites":[],
        "help":[],
        "oa":[],
        "golf":[],
        "father":[],
        "paymeabeer":[],
        "meteo":[],
        "forecast":[]
    };
    doc = {
      doc_name: 'history',
      history: empty
    }
      db.insert(doc, function(err, newDoc) {
        activity_log = doc;
      });
    }
  });

}
function generate_keyboards(){
  db.findOne({
    doc_name: 'sites'
  }, function(err, doc) {
    if (doc) {
      meteo_sub = [];
      forecast_sub = [];
      pushed = false;
      i = 1;
      doc.sites.forEach(function(item, idx, array) {
        meteo_sub.push({text:item.name, callback_data: "meteo."+item.name});
        forecast_sub.push({text:item.name, callback_data: "forecast."+item.name});
        if (i == 4) {
          meteo_menu_buttons.push(meteo_sub);
          forecast_menu_buttons.push(forecast_sub);
          meteo_sub = [];
          forecast_sub = [];
          i = 0;
          pushed = true;
        } else {
          pushed = false;
        }
        i++;
        if (idx == array.length - 1) {
          if (!pushed) {
            meteo_menu_buttons.push(meteo_sub);
            forecast_menu_buttons.push(forecast_sub);
          }
          meteo_menu = {
            inline_keyboard: meteo_menu_buttons,
          }
          forecast_menu = {
            inline_keyboard: forecast_menu_buttons,
          }
        }
      });
    }
  });
}

generate_keyboards();

var set_sites = function(req, res) {
  if (req.body.hasOwnProperty('sites')) {
    db.findOne({
      doc_name: 'sites'
    }, function(err, doc) {
      if (!doc) {
        doc = {
          doc_name: 'sites',
          updated_on: moment().format(),
          sites: req.body.sites
        }
        db.insert(doc, function(err, newDoc) {
          res.json({
            message: 'ok'
          })
        });
      } else {
        doc.sites = req.body.sites;
        doc.updated_on = moment().format();
        db.update({
          doc_name: 'sites'
        }, doc, {}, function(err, numReplaced) {
          res.json({
            message: 'ok'
          })
        });
      }
    });
  }

}
var set_files = function(req, res) {
  if (req.body.hasOwnProperty('files')) {

    if (req.body.files.length>0) {
      db.findOne({
        doc_name: 'files'
      }, function(err, doc) {
        if (!doc) {

          doc = {
            doc_name: 'files',
            updated_on: moment().format(),
            files: req.body.files
          }
          db.insert(doc, function(err, newDoc) {
            res.json({
              message: 'ok'
            })
          });
        } else {
          doc.files = req.body.files;
          doc.updated_on = moment().format();
          db.update({
            doc_name: 'files'
          }, doc, {}, function(err, numReplaced) {
            res.json({
              message: 'ok'
            })
          });
        }
      });
    }else{
      res.json({
        message: 'nok'
      })
    }
  }else{
    res.json({
      message: 'nok'
    })
  }
}
var get_sites = function(req, res) {
  db.findOne({
    doc_name: 'sites'
  }, function(err, doc) {
    if (!doc) {
      res.json({
        message: 'nothing'
      });
    } else {
      res.json(doc);
    }
  });
}
var get_history = function(req, res) {
  //Access-Control-Allow-Origin:*
  //res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  res.json(activity_log.history);
}
var list_file_id = function(req, res) {
  db.findOne({
    doc_name: 'files'
  }, function(err, doc) {
    if (doc) {
      res.json(doc)
    } else {
      res.json({
        message: 'nothing'
      });
    }
  });
}
var has_file_id = function(req, res) {
  has_file_id = false;
  if (req.body.hasOwnProperty("file_id")) {
    db.findOne({
      doc_name: 'files'
    }, function(err, doc) {
      if (doc) {
        if (doc.files.indexOf(req.body.file_id) >= 0) {
          has_file_id = true

        }

      }
      res.json({
        message: has_file_id
      });
    });
  }

}
var get_status = function(req, res) {
  db.findOne({
    doc_name: 'status'
  }, function(err, doc) {
    if (doc) {
      res.json(doc)
    } else {
      res.json({
        message: 'none'
      });
    }
  });

}
var set_status = function(req, res) {
  var notify = false
  var notify_msg = []
  if (req.body.hasOwnProperty("zones")) {
    if (req.body.zones.hasOwnProperty("g1")) {
      if (req.body.zones.hasOwnProperty("g2n")) {
        if (req.body.zones.hasOwnProperty("g2w")) {
          if (req.body.zones.hasOwnProperty("g2s")) {
            if (req.body.zones.hasOwnProperty("g5w")) {
              if (req.body.zones.hasOwnProperty("g5e")) {
                db.findOne({
                  doc_name: 'status'
                }, function(err, doc) {
                  if (!doc) {

                    doc = {
                      doc_name: 'status',
                      zones: {
                        g1: req.body.zones.g1,
                        g2n: req.body.zones.g2n,
                        g2w: req.body.zones.g2w,
                        g2s: req.body.zones.g2s,
                        g5w: req.body.zones.g5w,
                        g5e: req.body.zones.g5e
                      }
                    }
                    db.insert(doc, function(err, newDoc) {
                      res.json({
                        message: 'ok'
                      })
                    });

                  } else {

                    if (doc.zones.g1 != req.body.zones.g1) {

                      notify = true
                      notify_msg.push("`LFA GOLF 1 is " + req.body.zones.g1 + "`")
                      doc.zones.g1 = req.body.zones.g1
                    }
                    if (doc.zones.g2n != req.body.zones.g2n) {
                      notify = true
                      notify_msg.push("`LFA GOLF 2 North is " + req.body.zones.g2n + "`")
                      doc.zones.g2n = req.body.zones.g2n
                    }
                    if (doc.zones.g2w != req.body.zones.g2w) {
                      notify = true
                      notify_msg.push("`LFA GOLF 2 West is " + req.body.zones.g2w + "`")
                      doc.zones.g2w = req.body.zones.g2w
                    }
                    if (doc.zones.g2s != req.body.zones.g2s) {
                      notify = true
                      notify_msg.push("`LFA GOLF 2 South is " + req.body.zones.g2s + "`")
                      doc.zones.g2s = req.body.zones.g2s
                    }
                    if (doc.zones.g5w != req.body.zones.g5w) {
                      notify = true
                      notify_msg.push("`LFA GOLF 5 West is " + req.body.zones.g5w + "`")
                      doc.zones.g5w = req.body.zones.g5w
                    }
                    if (doc.zones.g5e != req.body.zones.g5e) {
                      notify = true
                      notify_msg.push("`LFA GOLF 5 East is " + req.body.zones.g5e + "`")
                      doc.zones.g5e = req.body.zones.g5e
                    }
                    db.update({
                      doc_name: 'status'
                    }, doc, {}, function(err, numReplaced) {

                      if (notify) {
                        db.findOne({
                          doc_name: 'chats'
                        }, function(err, doc) {
                          if (doc) {
                            doc.chats.forEach(function(item, index, array) {
                              notify_msg.forEach(function(mit, min, ma) {
                                url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + item + '&text=' + mit + "&parse_mode=Markdown";
                                request(url, function(error, response, body) {
                                  if (!error && response.statusCode == 200) {
                                    var info = JSON.parse(body)
                                  }
                                });
                              });
                            });
                          }
                        });
                      }
                      res.json({
                        message: 'ok'
                      })

                    });

                  }
                });
              }
            }
          }
        }
      }
    }
  }

}
var notify_oa_file = function(req, res) {
  if (false) {
    if (req.body.hasOwnProperty('file')) {
      if (req.body.file.hasOwnProperty('file_name')) {
        if (req.body.file.hasOwnProperty('file_url')) {
          db.findOne({
            doc_name: 'chats'
          }, function(err, doc) {
            if (doc) {
              doc.chats.forEach(function(item, index, array) {
                txt = "BPC has released a new openAIR file named : " + req.body.file.file_name + " you can get it here: " + req.body.file.file_url
                url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + item + '&text=' + txt;
                request(url, function(error, response, body) {
                  if (!error && response.statusCode == 200) {

                  }
                });
              });
            }
          });
        }
      }
    }
  }

  res.json({
    message: 'none'
  });
}
var list_chats = function(req, res) {
  db.findOne({
    doc_name: 'chats'
  }, function(err, doc) {
    if (doc) {
      res.json(doc)
    } else {
      res.json({
        message: 'nothing'
      })
    }
  });
}
var welcome = function(req, res) {
  res.json({
    message: 'Guess who is my father ...'
  })
}
var parse_req = function(req, res) {
  if(req.body.hasOwnProperty("callback_query")){

    locale='en';
    if (req.body.callback_query.hasOwnProperty("from")) {
      if (req.body.callback_query.from.hasOwnProperty("language_code")) {
        candidate= req.body.callback_query.from.language_code.toLowerCase();
        if (assert_locale(candidate)) {
          locale=candidate;
        }
      }
    }

    var callback_verb = req.body.callback_query.data.split(".");
    var action = callback_verb[0];
    var choice = callback_verb[1];
    var chat_id =req.body.callback_query.message.chat.id;
    if (action == "meteo") {
      send_meteo(chat_id,choice);
    }else if (action == "forecast") {
      send_forecast(chat_id,choice);
    }
  }else{

    if (req.body.hasOwnProperty("message")) {
      locale='en';
      if (req.body.message.hasOwnProperty("from")) {
        if (req.body.message.from.hasOwnProperty("language_code")) {
          candidate= req.body.message.from.language_code.toLowerCase();
          if (assert_locale(candidate)) {
            locale=candidate;
          }
        }
      }
      if (req.body.message.hasOwnProperty("chat")) {
        chat_id = req.body.message.chat.id;

        if (req.body.message.hasOwnProperty("text")) {
          verb = req.body.message.text.toLowerCase();

          send_meteo_if_appliccable(chat_id, verb);

          if (verb == '/flyable' || verb =='/flyable@golf_be_status_bot') {
            activity_log.history.flyable.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = ""
            db.findOne({
              doc_name: 'sites'
            }, function(err, doc) {
              if (doc) {
                doc.sites.sort(function(a, b) {
                  return a.forecast.fly - b.forecast.fly
                })
                has_prev = false;
                for (var i = doc.sites.length - 1; i >= 0; i--) {
                  if (doc.sites[i].wind_ok) {
                    response_txt += "`site : " + doc.sites[i].name + " " + (doc.sites[i].forecast.fly * 100).toFixed(2) + " % flyable `" + '\n';
                    has_prev = true;
                  }

                }
                if (has_prev) {
                  response_txt += '\n' + _("These predictions are shipped to you for free, with the help of [Paraglidable](https://paraglidable.com/) and [openweathermap](https://openweathermap.org/). Data are refreshed every 10 minutes.",locale);
                  talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
                } else {
                  response_txt = _("Sorry, there is no flyable Belgian site for now...",locale) + '\n'
                  response_txt += '\n' + _("These predictions are shipped to you for free, with the help of [Paraglidable](https://paraglidable.com/) and [openweathermap](https://openweathermap.org/). Data are refreshed every 10 minutes.",locale)
                  talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
                }
              }
            });
          }
          if (verb == '/xcable' || verb =='/xcable@golf_be_status_bot') {
            activity_log.history.xcable.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = ""
            db.findOne({
              doc_name: 'sites'
            }, function(err, doc) {
              if (doc) {
                doc.sites.sort(function(a, b) {
                  return a.forecast.xc - b.forecast.xc
                });
                has_prev = false;
                for (var i = doc.sites.length - 1; i >= 0; i--) {
                  if (doc.sites[i].wind_ok) {
                    response_txt += "`site : " + doc.sites[i].name + " " + (doc.sites[i].forecast.XC * 100).toFixed(2) + " % xc-able `" + '\n';
                    has_prev = true;
                  }

                }
                if (has_prev) {
                  response_txt += '\n' + _("These predictions are shipped to you for free, with the help of [Paraglidable](https://paraglidable.com/) and [openweathermap](https://openweathermap.org/). Data are refreshed every 10 minutes.",locale)
                  talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
                } else {
                  response_txt = _("Sorry, there is no xc-able Belgian site for now...",locale) + '\n'
                  response_txt += '\n' + _("These predictions are shipped to you for free, with the help of [Paraglidable](https://paraglidable.com/) and [openweathermap](https://openweathermap.org/). Data are refreshed every 10 minutes.",locale)
                  talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
                }

              }
            });
          }
          if (verb == '/sites' || verb =='/sites@golf_be_status_bot') {
            activity_log.history.sites.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = _("Here are the Belgian sites that we are monitoring every 10 minutes:",locale) + '\n' + '\n';
            db.findOne({
              doc_name: 'sites'
            }, function(err, doc) {
              if (doc) {
                has_site = false;
                for (var i = doc.sites.length - 1; i >= 0; i--) {
                  response_txt += "`" + doc.sites[i].name + " " + doc.sites[i].lat.toFixed(3) + ", " + doc.sites[i].lon.toFixed(3) + " orientation: " + doc.sites[i].min_deg + "/" + doc.sites[i].max_deg + "`" + '\n';
                  has_site = true;
                }
                if (has_site) {
                  talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
                } else {
                  talk_to_chat_text_with_kb(chat_id, _("We don't have any site for now, Sorry...",locale),main_menu);
                }

              }
            });
          }
          if (verb == '/help' || verb =='/help@golf_be_status_bot') {
            activity_log.history.help.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = _('/help - Displays this message',locale) + '\n';
            response_txt += _('/glide - Operate Mr. Airspaces',locale) + '\n';

            talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
          }
          if (verb == '/oa' || verb =='/oa@golf_be_status_bot') {
            activity_log.history.oa.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            db.findOne({
              doc_name: 'files'
            }, function(err, doc) {
              if (doc) {
                has_files = false;
                endpoints = [];
                for (var i = doc.files.length - 1; i >= 0; i--) {
                  response_txt = "`" + doc.files[i].name + ":` [AMSL](" + doc.files[i].amsl + ")" + '\n'
                  endpoints.push(get_url_with_kb(chat_id, response_txt,main_menu));
                  response_txt = "`" + doc.files[i].name + ":` [FL](" + doc.files[i].fl + ")" + '\n'
                  endpoints.push(get_url_with_kb(chat_id, response_txt,main_menu));
                  has_files = true;
                }

                if (!has_files) {
                  talk_to_chat_text_with_kb(chat_id, _("We don't have any openAIR File for now, Sorry...",locale),main_menu);
                } else {
                  //synchroneous call
                  async.mapSeries(endpoints, request, function(results) {
                    // Array of results
                  });
                }

              }
            });
          }
          if (verb == '/golf' || verb =='/golf@golf_be_status_bot') {
            activity_log.history.golf.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            db.findOne({
              doc_name: 'status'
            }, function(err, doc) {
              if (doc) {
                response_txt = _("`LFA GOLF 1 is ",locale) + _(doc.zones.g1,locale) + "`" + '\n'
                response_txt += _("`LFA GOLF 2 North is ",locale) + _(doc.zones.g2n,locale) + "`" + '\n'
                response_txt += _("`LFA GOLF 2 West is ",locale) + _(doc.zones.g2w ,locale)+ "`" + '\n'
                response_txt += _("`LFA GOLF 2 South is ",locale) + _(doc.zones.g2s,locale) + "`" + '\n'
                response_txt += _("`LFA GOLF 5 West is ",locale) + _(doc.zones.g5w,locale) + "`" + '\n'
                response_txt += _("`LFA GOLF 5 East is ",locale) + _(doc.zones.g5e,locale) + "`" + '\n'
                talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);

              }
            });
          }
          if (verb == '/father' || verb =='/father@golf_be_status_bot') {
            activity_log.history.father.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = _("Who is my father? That kind of quest often ends up with a hand cut ! But fear is the path to the dark side, fear leads to anger, anger leads to hate, hate leads to suffering",locale);
            talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
          }
          if (verb == '/paymeabeer' || verb =='/paymeabeer@golf_be_status_bot') {
            activity_log.history.paymeabeer.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            response_txt = _("Hey, if you wan't to pay my father a beer, consider making a donation https://paypal.me/golfbot",locale)
            talk_to_chat_text_with_kb(chat_id, response_txt,main_menu);
          }
          if (verb == '/meteo' || verb =='/meteo@golf_be_status_bot') {
            activity_log.history.meteo.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            //console.log("meteo");
            if (meteo_menu_buttons.length>0) {
              text = _("Please select the site you are interested in ?",locale)
              talk_to_chat_text_with_kb(chat_id,text,meteo_menu);
            }else{
              text = "Functionality is not available. Sorry !"
              talk_to_chat_text_with_kb(chat_id,text,main_menu);
            }
          }
          if (verb == '/forecast' || verb =='/forecast@golf_be_status_bot') {
            activity_log.history.forecast.push(req.body.message);
            db.update({
              doc_name: 'history'
            }, activity_log, {}, function(err, numReplaced) {

            });
            //console.log("meteo");
            if (forecast_menu_buttons.length>0) {
              text = _("Please select the site you are interested in ?",locale)
              talk_to_chat_text_with_kb(chat_id,text,forecast_menu);
            }else{
              text = "Functionality is not available. Sorry !"
              talk_to_chat_text_with_kb(chat_id,text,main_menu);
            }
          }

          if (verb == '/glide' || verb =='/glide@golf_be_status_bot'){

            talk_to_chat_text_with_kb(chat_id,"May I help you?",main_menu);
          }
          if (verb == '/close' || verb =='/close@golf_be_status_bot'){
            talk_to_chat_text_remove_kb(chat_id,"bye");
          }
          if (req.body.message.hasOwnProperty("group_chat_created")) {
            if (req.body.message.group_chat_created) {
              db.findOne({
                doc_name: 'chats'
              }, function(err, doc) {
                if (!doc) {
                  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + chat_id;
                  request(url, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                      var jbody = JSON.parse(body);
                      doc = {
                        doc_name: 'chats',
                        chats: [chat_id],
                        chats_details: [jbody]
                      }
                      db.insert(doc, function(err, newDoc) {
                        txt = _("Hello! I will monitor https://bit.ly/2XJPpwa and post to this channel each time an LFA GOLF's status changes.",locale)
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });
                        txt = _("... if you happen to find me not so responsive, please keep in mind that I am a weekend project and that my father is running me on a 10 $ raspberry pi zero.",locale)
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });

                        txt = _("If so, you might want to consider making a donation https://paypal.me/golfbot",locale)
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });
                      });
                    }
                  });

                } else {
                  if (doc.chats.indexOf(chat_id) < 0) {

                    url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + chat_id;
                    request(url, function(error, response, body) {
                      if (!error && response.statusCode == 200) {
                        var jbody = JSON.parse(body);
                        doc.chats_details.push(jbody);
                        doc.chats.push(chat_id);
                        db.update({
                          doc_name: 'chats'
                        }, doc, {}, function(err, numReplaced) {
                          txt = "Hello! I will monitor https://bit.ly/2XJPpwa and post to this channel each time an LFA GOLF's status changes."
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });
                          txt = "... if you happen to find me not so responsive, please keep in mind that I am a weekend project and that my father is running me on a 10 $ raspberry pi zero."
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });

                          txt = "If so, you might want to consider making a donation https://paypal.me/golfbot"
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });
                        });
                      }
                    });

                  }

                }
              })
            }
          }
          if (req.body.message.hasOwnProperty("new_chat_participant")) {
            usr = req.body.message.new_chat_participant.username;
            if (usr == 'GOLF_BE_status_bot') {
              db.findOne({
                doc_name: 'chats'
              }, function(err, doc) {
                if (!doc) {
                  url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + chat_id;
                  request(url, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                      var jbody = JSON.parse(body);
                      doc = {
                        doc_name: 'chats',
                        chats: [chat_id],
                        chats_details: [jbody]
                      }
                      db.insert(doc, function(err, newDoc) {
                        txt = "Hello! I will monitor https://bit.ly/2XJPpwa and post to this channel each time an LFA GOLF's status changes."
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });
                        txt = "... if you happen to find me not so responsive, please keep in mind that I am a weekend project and that my father is running me on a 10 $ raspberry pi zero."
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });

                        txt = "If so, you might want to consider making a donation https://paypal.me/golfbot"
                        url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                        request(url, function(error, response, body) {
                          if (!error && response.statusCode == 200) {
                            var info = JSON.parse(body)
                          }
                        });
                      });
                    }
                  });

                } else {
                  if (doc.chats.indexOf(chat_id) < 0) {

                    url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/getChat?chat_id=' + chat_id;
                    request(url, function(error, response, body) {
                      if (!error && response.statusCode == 200) {
                        var jbody = JSON.parse(body);
                        doc.chats_details.push(jbody);
                        doc.chats.push(chat_id);
                        db.update({
                          doc_name: 'chats'
                        }, doc, {}, function(err, numReplaced) {
                          txt = _("Hello! I will monitor https://bit.ly/2XJPpwa and post to this channel each time an LFA GOLF's status changes.",locale)
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });
                          txt = _("... if you happen to find me not so responsive, please keep in mind that I am a weekend project and that my father is running me on a 10 $ raspberry pi zero.",locale)
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });

                          txt = _("If so, you might want to consider making a donation https://paypal.me/golfbot",locale)
                          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + chat_id + '&text=' + txt;
                          request(url, function(error, response, body) {
                            if (!error && response.statusCode == 200) {
                              var info = JSON.parse(body)
                            }
                          });
                        });
                      }
                    });

                  }

                }
              });
            }
          }
          if (req.body.message.hasOwnProperty("left_chat_participant")) {
            usr = req.body.message.left_chat_participant.username;
            if (usr == 'GOLF_BE_status_bot') {
              db.findOne({
                doc_name: 'chats'
              }, function(err, doc) {
                if (doc) {
                  idx = doc.chats.indexOf(chat_id);
                  while (idx > -1) {
                    doc.chats.splice(idx, 1);
                    doc.chats_details.splice(idx, 1);
                    idx = doc.chats.indexOf(chat_id);
                  }
                  db.update({
                    doc_name: 'chats'
                  }, doc, {}, function(err, numReplaced) {});
                }
              });
            }
          }
        }
      }

    }
  }

  res.json({
    message: 'ok'
  })
}
var log_ip = function(req,res){
  log.info("proxy :"+req.headers['x-forwarded-for']);
  log.info("remote addr :"+req.connection.remoteAddress);
  res.json({
    message: 'none'
  });
}
var describe_update = function(req, res) {
  if (true) {
    db.findOne({
      doc_name: 'chats'
    }, function(err, doc) {
      if (doc) {
        doc.chats.forEach(function(item, index, array) {
          txt="*Forced shutdown !*"+'\n'+'\n'
          txt+="For obvious reasons, I'm shutting down untill better times. I whish you an happy end of the world. I'll be back (hopefully) ! "+'\n'
          // txt+=" - BPC decided not to upload Open Air files to Google Drive therefore /oa functionnality was broken since weeks. My father found a countermeasure and I am now fixed ;"+'\n'
          // txt+=" - Now you can download Open Air files in both AMSL and FL formats;"+'\n'
          // txt+=" - FBVL/BVVF has kindly proposed to help with translation, I'll soon be multilingual."+'\n'+'\n'
          // txt+="For full change log history see here : https://www.mr-airspaces.cloud/#logs"+'\n'
          // txt+=""+'\n'
          // txt+="Mr. Airspaces"+'\n'

          url = 'https://api.telegram.org/bot708917193:AAFOKdUCyrh5J1GFk1ScLwmAhm8HgeA5EVM/sendMessage?chat_id=' + item + '&text=' + txt+ "&parse_mode=Markdown";
          request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {

            }
          });
        });
      }
    });
  }


  res.json({
    message: 'none'
  });
}

var app = express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .get('/', welcome)
  .get('/FUQfNWvxWoMjVkjzeIxL', list_chats) // list of chats that bot belongs to
  .post('/voKwJeoXeKFIMmiVcBgqzKEv', parse_req) // telegram web hook
  .post('/NoQTpyQstWqBIoUgRdBsgIWCu', set_status) // status
  .get('/NoQTpyQstWqBIoUgRdBsgIWCu', get_status)
  .post('/NoQkjsdhfiutWqBIoUgRdBkkIuaa', has_file_id)

  .post('/hnnvbzorycbskfozhfudieueu', notify_oa_file)
  .post('/hnnvbzorycbskopikanobakidashiryu', set_files)
  .post('/dItKNnPCaZbTNKVAYK', set_sites)
  .get('/mhrDkdGRvitryJvNYiPYnocm', get_sites)
  .get('/UOgjNzpgMlOxzvElzeVkjCSQbr', describe_update)
  .get('/UZeLvHozfhwsL53eoAjetEYv', get_history)
  .get('/UZeLvHozfhwsL53eoAjetEYvdljzzZZZ', log_ip)
  .get('/bousoufheildkfoiejsksooooo', list_file_id);

https.createServer(credentials, app).listen(PORT, () => console.log(`Listening on ${ PORT }`));
