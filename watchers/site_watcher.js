const request = require('request');
const moment = require('moment');

const glidable_api_keys = ['9a0aa78df234e1ad']
const weather_api_key = '51e8d2cacfc74bc709206d7610537181'

const ow_forecast_url = 'api.openweathermap.org/data/2.5/forecast?lat=50.14167&lon=6.12639&APPID=' + weather_api_key + '&units=metric'
const glidable_url = 'https://paraglidable.com/apps/api/get.php?format=JSON&version=1&key='
const today = moment().format('YYYY-MM-DD');
// for new sites, update here and call set_sites. Then launch this watcher
default_sites = {
  sites: [
    {
      "lat": 50.39989,
      "lon": 5.88678,
      "min_deg": 180,
      "max_deg": 300,
      "current_deg": 0,
      "wind_ok": false,
      "api_key": glidable_api_keys[0],
      "name": "Coo",
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9529,
        "XC": 0.302
      }
    },
    {
      "lat": 50.113,
      "lon": 5.0093,
      "min_deg": 330,
      "max_deg": 30,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Beauraing",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.949,
        "XC": 0.302
      }
    },
    {
      "lat": 50.173712,
      "lon": 5.639915,
      "min_deg": 200,
      "max_deg": 240,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Maboge",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
      "lat": 50.35416667,
      "lon": 4.86083333,
      "min_deg": 135,
      "max_deg": 225,
      "current_deg": 0,
      "wind_ok": false,
      "name": "7 Meuses",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
      "lat": 50.21583,
      "lon": 5.51639,
      "min_deg": 85,
      "max_deg": 95,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Marcourt",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
      "lat": 50.55041,
      "lon": 5.57087,
      "min_deg": 215,
      "max_deg": 240,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Avister",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
      "lat": 50.575893,
      "lon": 5.6566,
      "min_deg": 15,
      "max_deg": 75,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Prayon",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
      "lat": 50.17972,
      "lon": 5.56581,
      "min_deg": 300,
      "max_deg": 335,
      "current_deg": 0,
      "wind_ok": false,
      "name": "Corimont",
      "api_key": glidable_api_keys[0],
      "meteo":{"id":0},
      "forecast": {
        "fly": 0.9569,
        "XC": 0.2902
      }
    },
    {
        "lat": 50.14167,
        "lon": 6.12639,
        "min_deg": 85,
        "max_deg": 135,
        "current_deg": 0,
        "wind_ok": false,
        "name": "Ouren",
        "api_key": glidable_api_keys[0],
        "meteo":{"id":0},
        "forecast": {
          "fly": 0.9569,
          "XC": 0.2902
        }
      },
      {
        "lat": 50.1497,
        "lon": 5.2061,
        "min_deg": 330,
        "max_deg": 30,
        "current_deg": 0,
        "wind_ok": false,
        "name": "Rond du Roi",
        "api_key": glidable_api_keys[0],
        "meteo":{"id":0},
        "forecast": {
          "fly": 0.9569,
          "XC": 0.2902
        }
      }
  ]
};

function do_get(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) reject(error);
      if (response.statusCode != 200) {
        reject('Invalid status code <' + response.statusCode + '>');
      }
      resolve(JSON.parse(body));
    });
  });
}

function getDateIndexInArray(element) {
  return element.date == this;
}
async function gather_data() {
  try {
    const ia_data = []
    const sites = await do_get('https://mister.mr-airspaces.cloud:8443/mhrDkdGRvitryJvNYiPYnocm')
    for (let api_key of glidable_api_keys) {
      let ia_response = await do_get(glidable_url + api_key)
      ia_data.push(ia_response)
    }
    for (let site of sites.sites) {
      site.ai_forecast = [];
      let ow_now_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + site.lat + '&lon=' + site.lon + '&APPID=' + weather_api_key + "&units=metric"
      let ow_forcast_url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + site.lat + '&lon=' + site.lon + '&APPID=' + weather_api_key + "&units=metric"
      let ow_now_response = await do_get(ow_now_url)
      let ow_forecast_response = await do_get(ow_forcast_url)
      site.meteo = ow_now_response
      if (ow_now_response.hasOwnProperty("wind")) {
        if (ow_now_response.wind.hasOwnProperty("deg")) {
          site.current_deg = ow_now_response.wind.deg
          if (site.min_deg > site.max_deg) {
            if ((ow_now_response.wind.deg >= site.min_deg && ow_now_response.wind.deg <= 360) || (ow_now_response.wind.deg >= 1 && ow_now_response.wind.deg <= site.max_deg)) {
              site.wind_ok = true;
            } else {
              site.wind_ok = false;
            }
          } else {
            if (ow_now_response.wind.deg <= site.max_deg && ow_now_response.wind.deg >= site.min_deg) {
              site.wind_ok = true;
            } else {
              site.wind_ok = false;
            }
          }

        }
      }
      for (let ia_item of ia_data) {
        for (let date_key of Object.keys(ia_item)) {
          for (let ia_site of ia_item[date_key]) {
            if (ia_site.name == site.name) {
              if (!moment(date_key).isAfter(moment().add(5, 'days'))) {
                var fc = {
                  date: date_key,
                  forecast: ia_site.forecast,
                  ow_forecasts: []
                }

                if (date_key == today) {
                  site.forecast = ia_site.forecast
                }

                site.ai_forecast.push(fc);
              }

            }
          }
        }
      }
      for (let ow_item of ow_forecast_response.list) {
        indx = site.ai_forecast.findIndex(getDateIndexInArray, moment(ow_item.dt * 1000).format('YYYY-MM-DD'))
        if (indx >= 0) {
          ow_date = moment(ow_item.dt * 1000)
          //2013-02-08 09:30:26
          sunrise = ow_date.format("YYYY-MM-DD") + " " + moment(site.meteo.sys.sunrise * 1000).format("HH:mm:ss")
          sunset = ow_date.format("YYYY-MM-DD") + " " + moment(site.meteo.sys.sunset * 1000).format("HH:mm:ss")
          if (ow_date.isAfter(sunrise) && ow_date.isBefore(sunset)) {
            if (site.min_deg > site.max_deg) {
              if ((ow_item.wind.deg >= site.min_deg && ow_item.wind.deg <= 360) || (ow_item.wind.deg >= 1 && ow_item.wind.deg <= site.max_deg)) {
                fly_ok = true;
              } else {
                fly_ok = false;
              }
            } else {
              if (ow_item.wind.deg <= site.max_deg && ow_item.wind.deg >= site.min_deg) {
                fly_ok = true;
              } else {
                fly_ok = false;
              }
            }
            ow_fc = {
              time: ow_date.format('HH:mm'),
              desc: ow_item.weather[0].main + '(' + ow_item.weather[0].description + ')',
              wind_speed: ow_item.wind.speed,
              wind_deg: ow_item.wind.deg,
              fly_ok: fly_ok
            }
            site.ai_forecast[indx].ow_forecasts.push(ow_fc);
          }

        }
      }
    }
    var clientServerOptions = {
      uri: 'https://mister.mr-airspaces.cloud:8443/dItKNnPCaZbTNKVAYK',
      body: JSON.stringify(sites),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    var test_resp = await do_get(clientServerOptions)
    console.log(test_resp);
  } catch (error) {
    console.error(error);
  }
}

gather_data();
