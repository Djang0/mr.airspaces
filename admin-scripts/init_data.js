var moment = require('moment');
var Datastore = require('nedb'),
  db = new Datastore({
    filename: 'chats_new.db',
    autoload: true
  });

db.persistence.setAutocompactionInterval(500000)

const glidable_api_keys = ['9a0aa78df234e1ad']

status = {
  doc_name: 'status',
  zones: {
    g1: "NOT ACTIVE",
    g2n: "NOT ACTIVE",
    g2w: "NOT ACTIVE",
    g2s: "NOT ACTIVE",
    g5w: "NOT ACTIVE",
    g5e: "NOT ACTIVE"
  }
}

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

doc = {
  doc_name: 'sites',
  updated_on: moment().format(),
  sites: default_sites.sites
};

histo_obj = {
  history: {
    flyable: [
      {
        message_id: 3155,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555071142,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3157,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555071156,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3159,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555084618,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3206,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555139610,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3287,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555220845,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3295,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555225660,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3313,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555233250,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3321,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555236735,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3336,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555237186,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3342,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1555242402,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3393,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555311338,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3397,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555316302,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3429,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555327724,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3431,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555392322,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3433,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1555392324,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3439,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555397540,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3580,
        from: {
          id: 614644041,
          is_bot: false,
          first_name: 'François',
          language_code: 'en'
        },
        chat: {
          id: 614644041,
          first_name: 'François',
          type: 'private'
        },
        date: 1555501501,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3649,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1555582608,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3658,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555588751,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3698,
        from: {
          id: 614644041,
          is_bot: false,
          first_name: 'François',
          language_code: 'fr'
        },
        chat: {
          id: 614644041,
          first_name: 'François',
          type: 'private'
        },
        date: 1555605047,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3714,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555656097,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3716,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1555657455,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3718,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: -220036654,
          title: 'LaRoch\'Ailes',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1555657495,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3761,
        from: {
          id: 334082552,
          is_bot: false,
          first_name: 'Maurice',
          language_code: 'fr'
        },
        chat: {
          id: 334082552,
          first_name: 'Maurice',
          type: 'private'
        },
        date: 1555676689,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3881,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1555747176,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3999,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555827109,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4012,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555837795,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4110,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1555953159,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4152,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1556013924,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4158,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556020462,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4238,
        from: {
          id: 609397801,
          is_bot: false,
          first_name: 'Alain',
          last_name: 'Hubert',
          language_code: 'fr'
        },
        chat: {
          id: 609397801,
          first_name: 'Alain',
          last_name: 'Hubert',
          type: 'private'
        },
        date: 1556277043,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4379,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1556612036,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4454,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1556643630,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4521,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1556700856,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4557,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1556706823,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4574,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1556716868,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4630,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1556804488,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4801,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1557214274,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4835,
        from: {
          id: 767660874,
          is_bot: false,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          language_code: 'de'
        },
        chat: {
          id: 767660874,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          type: 'private'
        },
        date: 1557262297,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4946,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1557644638,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4952,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557645911,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5195,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1558083685,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5197,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558089538,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5276,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558257211,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5411,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558604685,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5420,
        from: {
          id: 44671334,
          is_bot: false,
          first_name: 'Mario',
          last_name: 'Tammaro',
          language_code: 'it'
        },
        chat: {
          id: 44671334,
          first_name: 'Mario',
          last_name: 'Tammaro',
          type: 'private'
        },
        date: 1558612247,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5456,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558620993,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5490,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1558642171,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5516,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1558699365,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5565,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558762180,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5573,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558767813,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5579,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1558775626,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5650,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558801941,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5653,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1558857361,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5655,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1558857446,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5692,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1558944922,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6157,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1559556564,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6205,
        from: {
          id: 669511813,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'Goosse',
          language_code: 'fr'
        },
        chat: {
          id: 669511813,
          first_name: 'Pierre',
          last_name: 'Goosse',
          type: 'private'
        },
        date: 1559661848,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6343,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560340419,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6434,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1560507657,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6478,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514888,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6574,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560673177,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6967,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1561188440,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6972,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1561190863,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7073,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540300,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7113,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541345,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7115,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541359,
        text: '/flyable',
        entities: [
          {
            offset: 0,
            length: 8,
            type: 'bot_command'
          }
        ]
      }
    ],
    xcable: [
      {
        message_id: 3504,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555424118,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3720,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1555657517,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3883,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1555747185,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4001,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555827117,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4112,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1555953179,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4150,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1556013912,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4240,
        from: {
          id: 609397801,
          is_bot: false,
          first_name: 'Alain',
          last_name: 'Hubert',
          language_code: 'fr'
        },
        chat: {
          id: 609397801,
          first_name: 'Alain',
          last_name: 'Hubert',
          type: 'private'
        },
        date: 1556277060,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4381,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1556612050,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4828,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557258919,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4948,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1557644703,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4954,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557645937,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5492,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1558642194,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5514,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1558699354,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6341,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560340411,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6480,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514890,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7091,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540338,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7131,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541398,
        text: '/xcable',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      }
    ],
    sites: [
      {
        message_id: 3498,
        from: {
          id: 180808226,
          is_bot: false,
          first_name: 'Rik',
          last_name: 'De Mey',
          username: 'Rik_De_Mey',
          language_code: 'nl'
        },
        chat: {
          id: 180808226,
          first_name: 'Rik',
          last_name: 'De Mey',
          username: 'Rik_De_Mey',
          type: 'private'
        },
        date: 1555418289,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3759,
        from: {
          id: 334082552,
          is_bot: false,
          first_name: 'Maurice',
          language_code: 'fr'
        },
        chat: {
          id: 334082552,
          first_name: 'Maurice',
          type: 'private'
        },
        date: 1555676681,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4799,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1557214183,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4933,
        from: {
          id: 689379617,
          is_bot: false,
          first_name: 'Harpigny',
          last_name: 'Pascal'
        },
        chat: {
          id: -220036654,
          title: 'LaRoch\'Ailes',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1557644160,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6201,
        from: {
          id: 250674906,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          language_code: 'fr'
        },
        chat: {
          id: 250674906,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          type: 'private'
        },
        date: 1559591087,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6456,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514310,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6460,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514681,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6526,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1560516321,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6572,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560671704,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7071,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540294,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7111,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541338,
        text: '/sites',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      }
    ],
    help: [
      {
        message_id: 3506,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555424130,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4824,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557258861,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6264,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560069752,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6301,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560072090,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6339,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560262394,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6380,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560406816,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6394,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560433833,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6418,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560502806,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6421,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560505739,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7078,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540321,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7142,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541469,
        text: '/help',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      }
    ],
    oa: [
      {
        message_id: 3226,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555143424,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3299,
        from: {
          id: 490943041,
          is_bot: false,
          first_name: 'lode',
          last_name: 'spruyt',
          language_code: 'en'
        },
        chat: {
          id: 490943041,
          first_name: 'lode',
          last_name: 'spruyt',
          type: 'private'
        },
        date: 1555227370,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3325,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555237175,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3806,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555704606,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3826,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555738110,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3901,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1555753961,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4160,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556020608,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4171,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556020659,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4198,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556126094,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4295,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556521143,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4409,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1556624793,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4487,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556686115,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4523,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1556702882,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4534,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1556704145,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4545,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1556704237,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4559,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1556710379,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4593,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: -220036654,
          title: 'LaRoch\'Ailes',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1556734250,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4788,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1557214146,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4935,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1557644451,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4972,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1557652943,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5056,
        from: {
          id: 372290257,
          is_bot: false,
          first_name: 'Matthijs',
          last_name: 'Derks',
          username: 'Matthss',
          language_code: 'en'
        },
        chat: {
          id: 372290257,
          first_name: 'Matthijs',
          last_name: 'Derks',
          username: 'Matthss',
          type: 'private'
        },
        date: 1557750740,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5146,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1558003738,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5220,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1558255530,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5231,
        from: {
          id: 614644041,
          is_bot: false,
          first_name: 'François',
          language_code: 'fr'
        },
        chat: {
          id: 614644041,
          first_name: 'François',
          type: 'private'
        },
        date: 1558255571,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5242,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1558256516,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5254,
        from: {
          id: 577377484,
          is_bot: false,
          first_name: 'Mathen',
          last_name: 'John',
          language_code: 'fr'
        },
        chat: {
          id: 577377484,
          first_name: 'Mathen',
          last_name: 'John',
          type: 'private'
        },
        date: 1558257132,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5265,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1558257152,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5299,
        from: {
          id: 542833148,
          is_bot: false,
          first_name: 'Daniel',
          last_name: 'W'
        },
        chat: {
          id: -220036654,
          title: 'LaRoch\'Ailes',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1558344646,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5341,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1558515925,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5429,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1558612671,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5778,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1559128194,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6262,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560069385,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6267,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1560070553,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6462,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514684,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6465,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514882,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6515,
        from: {
          id: 456757323,
          is_bot: false,
          first_name: 'Michel',
          last_name: 'Questiaux',
          language_code: 'fr'
        },
        chat: {
          id: 456757323,
          first_name: 'Michel',
          last_name: 'Questiaux',
          type: 'private'
        },
        date: 1560516302,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6560,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560667921,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6592,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1560683198,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6664,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1560787437,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6801,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1560958130,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6841,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561087275,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6861,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561100520,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6892,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1561114549,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7080,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540327,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7120,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541383,
        text: '/oa',
        entities: [
          {
            offset: 0,
            length: 3,
            type: 'bot_command'
          }
        ]
      }
    ],
    golf: [
      {
        message_id: 3237,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555143465,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3297,
        from: {
          id: 490943041,
          is_bot: false,
          first_name: 'lode',
          last_name: 'spruyt',
          language_code: 'en'
        },
        chat: {
          id: 490943041,
          first_name: 'lode',
          last_name: 'spruyt',
          type: 'private'
        },
        date: 1555227351,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3319,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555235009,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3323,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555237156,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3340,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1555242368,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3751,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555665922,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3754,
        from: {
          id: 334082552,
          is_bot: false,
          first_name: 'Maurice',
          language_code: 'fr'
        },
        chat: {
          id: 334082552,
          first_name: 'Maurice',
          type: 'private'
        },
        date: 1555673129,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3757,
        from: {
          id: 334082552,
          is_bot: false,
          first_name: 'Maurice',
          language_code: 'fr'
        },
        chat: {
          id: 334082552,
          first_name: 'Maurice',
          type: 'private'
        },
        date: 1555676662,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3764,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555681452,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3770,
        from: {
          id: 565730015,
          is_bot: false,
          first_name: 'Johan',
          last_name: 'Vdb',
          language_code: 'fr'
        },
        chat: {
          id: 565730015,
          first_name: 'Johan',
          last_name: 'Vdb',
          type: 'private'
        },
        date: 1555690103,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3804,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555704581,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3824,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555738097,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3866,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555741986,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3959,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555770482,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4155,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1556016758,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4236,
        from: {
          id: 609397801,
          is_bot: false,
          first_name: 'Alain',
          last_name: 'Hubert',
          language_code: 'fr'
        },
        chat: {
          id: 609397801,
          first_name: 'Alain',
          last_name: 'Hubert',
          type: 'private'
        },
        date: 1556277036,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4350,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1556542182,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4633,
        from: {
          id: 643594160,
          is_bot: false,
          first_name: 'Vivi',
          last_name: 'Balot',
          language_code: 'fr'
        },
        chat: {
          id: 643594160,
          first_name: 'Vivi',
          last_name: 'Balot',
          type: 'private'
        },
        date: 1556814291,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4826,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557258870,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5488,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1558642131,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6260,
        from: {
          id: 236283584,
          is_bot: false,
          first_name: 'Fré',
          last_name: 'C',
          language_code: 'en'
        },
        chat: {
          id: -273108325,
          title: 'Voler en Belgique',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1560069328,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6261,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560069368,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6263,
        from: {
          id: 236283584,
          is_bot: false,
          first_name: 'Fré',
          last_name: 'C',
          language_code: 'en'
        },
        chat: {
          id: 236283584,
          first_name: 'Fré',
          last_name: 'C',
          type: 'private'
        },
        date: 1560069410,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6268,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1560070576,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6295,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560071534,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6297,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: -273108325,
          title: 'Voler en Belgique',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1560071545,
        text: '/golf@GOLF_BE_status_bot',
        entities: [
          {
            offset: 0,
            length: 24,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6334,
        from: {
          id: 685984318,
          is_bot: false,
          first_name: 'Jack',
          last_name: 'Vanaudenhove'
        },
        chat: {
          id: -273108325,
          title: 'Voler en Belgique',
          type: 'group',
          all_members_are_administrators: true
        },
        date: 1560253702,
        text: '/golf@GOLF_BE_status_bot',
        entities: [
          {
            offset: 0,
            length: 24,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6336,
        from: {
          id: 236283584,
          is_bot: false,
          first_name: 'Fré',
          last_name: 'C',
          language_code: 'en'
        },
        chat: {
          id: 236283584,
          first_name: 'Fré',
          last_name: 'C',
          type: 'private'
        },
        date: 1560257525,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6476,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514885,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6528,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1560526513,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6675,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1560787441,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7095,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540351,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7135,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541423,
        text: '/golf',
        entities: [
          {
            offset: 0,
            length: 5,
            type: 'bot_command'
          }
        ]
      }
    ],
    father: [
      {
        message_id: 3311,
        from: {
          id: 490943041,
          is_bot: false,
          first_name: 'lode',
          last_name: 'spruyt',
          language_code: 'en'
        },
        chat: {
          id: 490943041,
          first_name: 'lode',
          last_name: 'spruyt',
          type: 'private'
        },
        date: 1555227396,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4837,
        from: {
          id: 767660874,
          is_bot: false,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          language_code: 'de'
        },
        chat: {
          id: 767660874,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          type: 'private'
        },
        date: 1557262313,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6497,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560515227,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7103,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540396,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7140,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541462,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7149,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541502,
        text: '/father',
        entities: [
          {
            offset: 0,
            length: 7,
            type: 'bot_command'
          }
        ]
      }
    ],
    paymeabeer: [
      {
        message_id: 3502,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555424095,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4830,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1557258953,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5494,
        from: {
          id: 489893453,
          is_bot: false,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          language_code: 'fr'
        },
        chat: {
          id: 489893453,
          first_name: 'Pascal',
          last_name: 'Lhoas',
          username: 'PascalLhoas',
          type: 'private'
        },
        date: 1558642218,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6495,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560515224,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7093,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540343,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7133,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541408,
        text: '/paymeabeer',
        entities: [
          {
            offset: 0,
            length: 11,
            type: 'bot_command'
          }
        ]
      }
    ],
    meteo: [
      {
        message_id: 3161,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555084636,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3165,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555084680,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3169,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555084708,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3242,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555174971,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3315,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1555234975,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3435,
        from: {
          id: 704458546,
          is_bot: false,
          first_name: 'Laurent',
          last_name: 'S',
          language_code: 'fr'
        },
        chat: {
          id: 704458546,
          first_name: 'Laurent',
          last_name: 'S',
          type: 'private'
        },
        date: 1555397497,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 3885,
        from: {
          id: 211825608,
          is_bot: false,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          language_code: 'fr'
        },
        chat: {
          id: 211825608,
          first_name: 'Q-',
          last_name: 'Deb\'',
          username: 'QDebFly',
          type: 'private'
        },
        date: 1555747194,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4014,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1555839019,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4187,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1556112336,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4242,
        from: {
          id: 609397801,
          is_bot: false,
          first_name: 'Alain',
          last_name: 'Hubert',
          language_code: 'fr'
        },
        chat: {
          id: 609397801,
          first_name: 'Alain',
          last_name: 'Hubert',
          type: 'private'
        },
        date: 1556277077,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4784,
        from: {
          id: 722114185,
          is_bot: false,
          first_name: 'Christian',
          last_name: 'C',
          language_code: 'fr'
        },
        chat: {
          id: 722114185,
          first_name: 'Christian',
          last_name: 'C',
          type: 'private'
        },
        date: 1557214099,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 4839,
        from: {
          id: 767660874,
          is_bot: false,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          language_code: 'de'
        },
        chat: {
          id: 767660874,
          first_name: 'Bernhard',
          last_name: 'Pfirter',
          type: 'private'
        },
        date: 1557262334,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5106,
        from: {
          id: 250674906,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          language_code: 'fr'
        },
        chat: {
          id: 250674906,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          type: 'private'
        },
        date: 1557933434,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5422,
        from: {
          id: 44671334,
          is_bot: false,
          first_name: 'Mario',
          last_name: 'Tammaro',
          language_code: 'it'
        },
        chat: {
          id: 44671334,
          first_name: 'Mario',
          last_name: 'Tammaro',
          type: 'private'
        },
        date: 1558612289,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 5424,
        from: {
          id: 44671334,
          is_bot: false,
          first_name: 'Mario',
          last_name: 'Tammaro',
          language_code: 'it'
        },
        chat: {
          id: 44671334,
          first_name: 'Mario',
          last_name: 'Tammaro',
          type: 'private'
        },
        date: 1558612308,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6197,
        from: {
          id: 250674906,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          language_code: 'fr'
        },
        chat: {
          id: 250674906,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          type: 'private'
        },
        date: 1559591033,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6345,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560343061,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6427,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560506668,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6492,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560515212,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6510,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560516154,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6546,
        from: {
          id: 250674906,
          is_bot: false,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          language_code: 'fr'
        },
        chat: {
          id: 250674906,
          first_name: 'Pierre',
          last_name: 'T',
          username: 'Pieretea',
          type: 'private'
        },
        date: 1560629319,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6576,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560673190,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7075,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540308,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7117,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541368,
        text: '/meteo',
        entities: [
          {
            offset: 0,
            length: 6,
            type: 'bot_command'
          }
        ]
      }
    ],
    forecast: [
      {
        message_id: 6349,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560345671,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6353,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560345903,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6357,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560346063,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6361,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560346335,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6365,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560346446,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6397,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560443372,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6401,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560443414,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6482,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560514891,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6486,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560515057,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6489,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560515193,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 6503,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1560516079,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7097,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540356,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7100,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561540377,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      },
      {
        message_id: 7137,
        from: {
          id: 580703241,
          is_bot: false,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          language_code: 'fr'
        },
        chat: {
          id: 580703241,
          first_name: 'Ludovic',
          last_name: 'Reenaers',
          type: 'private'
        },
        date: 1561541434,
        text: '/forecast',
        entities: [
          {
            offset: 0,
            length: 9,
            type: 'bot_command'
          }
        ]
      }
    ]
  }
};
doc_hist = {
  doc_name: 'history',
  history: histo_obj.history
}
db.insert(status, function(err, newDoc) {
  console.log("status ok");
  db.insert(doc, function(err, newDoc) {
    console.log("sites ok");
    db.insert(doc_hist, function(err, newDoc) {
      console.log("history ok");
    });
  });
});
