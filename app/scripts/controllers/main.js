'use strict';

/**
 * @ngdoc function
 * @name teesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teesApp
 */


angular.module('teesApp')
  .controller('MainCtrl', function ($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.defaults.headers.common.Authorization = 'Bearer AAAAAAAAAAAAAAAAAAAAAHjWuwAAAAAAlyaKAHVwjPlYHYilPakzI5GV7W4%3DLjNxFWnZSRr4d3ODK955wKCMNtNsiRoqnNiSM9BGm1N0E6DF9D';
    $http({
      // http://dummy.restapiexample.com/api/v1/employees
      url: 'https://api.twitter.com/1.1/search/tweets.json',
      method: 'GET',
      params: {q: '#games'},
    }).then(function (result) {
      console.log('result', result);
    }, function error(response) {
      // this function will be called when the request returned error status
    });

      $scope.data = [{
        "statuses": [
          {
            "created_at": "Mon Sep 16 12:33:35 +0000 2019",
            "id": 1173575656187187200,
            "id_str": "1173575656187187200",
            "text": "RT @DedyDjun: ===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe tanggal 20…",
            "truncated": false,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "DedyDjun",
                  "name": "Indomie Lovers",
                  "id": 969608557,
                  "id_str": "969608557",
                  "indices": [
                    3,
                    12
                  ]
                }
              ],
              "urls": []
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 1648813262,
              "id_str": "1648813262",
              "name": "Aeni",
              "screen_name": "Nuraeni02",
              "location": "Cirebon, Jawa Barat",
              "description": ":::Penyuka ☀️ dan 🌧️ karena jika keduanya hadir secara bersamaan maka akan menghasilkan 🌈 yang indah:::\n\nIG : @Nuraeni_28",
              "url": null,
              "entities": {
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 310,
              "friends_count": 486,
              "listed_count": 0,
              "created_at": "Mon Aug 05 22:17:02 +0000 2013",
              "favourites_count": 135,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 1419,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "9AE4E8",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme11/bg.gif",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme11/bg.gif",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1089235570394464256/8NvG1P3p_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1089235570394464256/8NvG1P3p_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1648813262/1524826805",
              "profile_link_color": "E81C4F",
              "profile_sidebar_border_color": "000000",
              "profile_sidebar_fill_color": "000000",
              "profile_text_color": "000000",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": false,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
              "created_at": "Sat Sep 14 03:23:00 +0000 2019",
              "id": 1172712322286022657,
              "id_str": "1172712322286022657",
              "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
              "truncated": true,
              "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                  {
                    "url": "https://t.co/Gpuxr48M3P",
                    "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                      117,
                      140
                    ]
                  }
                ]
              },
              "metadata": {
                "iso_language_code": "in",
                "result_type": "recent"
              },
              "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
              "in_reply_to_status_id": null,
              "in_reply_to_status_id_str": null,
              "in_reply_to_user_id": null,
              "in_reply_to_user_id_str": null,
              "in_reply_to_screen_name": null,
              "user": {
                "id": 969608557,
                "id_str": "969608557",
                "name": "Indomie Lovers",
                "screen_name": "DedyDjun",
                "location": "Cirebon, Jawa Barat",
                "description": "founder : Djunmedia",
                "url": "https://t.co/gqNe7lhk3L",
                "entities": {
                  "url": {
                    "urls": [
                      {
                        "url": "https://t.co/gqNe7lhk3L",
                        "expanded_url": "http://djunmedia.blogspot.co.id/",
                        "display_url": "djunmedia.blogspot.co.id",
                        "indices": [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  "description": {
                    "urls": []
                  }
                },
                "protected": false,
                "followers_count": 1039,
                "friends_count": 917,
                "listed_count": 2,
                "created_at": "Sun Nov 25 07:43:04 +0000 2012",
                "favourites_count": 806,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 14925,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
                "profile_link_color": "009999",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
              },
              "geo": null,
              "coordinates": null,
              "place": null,
              "contributors": null,
              "is_quote_status": false,
              "retweet_count": 7,
              "favorite_count": 3,
              "favorited": false,
              "retweeted": false,
              "possibly_sensitive": false,
              "lang": "in"
            },
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "in"
          },
          {
            "created_at": "Mon Sep 16 03:21:32 +0000 2019",
            "id": 1173436732064223232,
            "id_str": "1173436732064223232",
            "text": "Artikel baru guys, \nBisa di order di @tees_indonesia  Link toko nya bisa langsung di klik ini : 👇… https://t.co/rl31ANV42u",
            "truncated": true,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [],
              "urls": [
                {
                  "url": "https://t.co/rl31ANV42u",
                  "expanded_url": "https://twitter.com/i/web/status/1173436732064223232",
                  "display_url": "twitter.com/i/web/status/1…",
                  "indices": [
                    99,
                    122
                  ]
                }
              ]
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 1096436643681062913,
              "id_str": "1096436643681062913",
              "name": "D$ - do something",
              "screen_name": "DeswarRamke",
              "location": "",
              "description": "Check out and Buy my product, click this link  😉\n👇👇👇",
              "url": "https://t.co/nT3pfqjfSk",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/nT3pfqjfSk",
                      "expanded_url": "http://teespring.com/stores/d-do-something-store",
                      "display_url": "teespring.com/stores/d-do-so…",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 3,
              "friends_count": 6,
              "listed_count": 0,
              "created_at": "Fri Feb 15 15:50:41 +0000 2019",
              "favourites_count": 11,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": false,
              "verified": false,
              "statuses_count": 22,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "F5F8FA",
              "profile_background_image_url": null,
              "profile_background_image_url_https": null,
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1170781923293089792/otaMCp-U_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1170781923293089792/otaMCp-U_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1096436643681062913/1567971393",
              "profile_link_color": "1DA1F2",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": true,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "in"
          },
          {
            "created_at": "Sun Sep 15 02:52:00 +0000 2019",
            "id": 1173066908305899522,
            "id_str": "1173066908305899522",
            "text": "Happy weekend, Citeeszen!\n\nHari terakhir Diskon 30% untuk produk-produk #catlover . Cek produknya di… https://t.co/HFl27wxSK2",
            "truncated": true,
            "entities": {
              "hashtags": [
                {
                  "text": "catlover",
                  "indices": [
                    72,
                    81
                  ]
                }
              ],
              "symbols": [],
              "user_mentions": [],
              "urls": [
                {
                  "url": "https://t.co/HFl27wxSK2",
                  "expanded_url": "https://twitter.com/i/web/status/1173066908305899522",
                  "display_url": "twitter.com/i/web/status/1…",
                  "indices": [
                    102,
                    125
                  ]
                }
              ]
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://instagram.com\" rel=\"nofollow\">Instagram</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 487203596,
              "id_str": "487203596",
              "name": "teesIndonesia",
              "screen_name": "teesIndonesia",
              "location": "Jakarta, Indonesia",
              "description": "Bikin kaos & merchandise satuan Office hour: Senin-Jumat 9-5  Pesan Whatsapp: 081316475144 Phone: 021-3442810 Email: dara@tees.co.id\n#TeesIndonesia",
              "url": "https://t.co/tMauDDu0oq",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/tMauDDu0oq",
                      "expanded_url": "http://tees.co.id",
                      "display_url": "tees.co.id",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 9877,
              "friends_count": 361,
              "listed_count": 56,
              "created_at": "Thu Feb 09 03:36:28 +0000 2012",
              "favourites_count": 391,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 40217,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "FFFFFF",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/895833871060684800/IicxH0B1_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/895833871060684800/IicxH0B1_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/487203596/1552469353",
              "profile_link_color": "0084B4",
              "profile_sidebar_border_color": "FFFFFF",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": false,
              "default_profile": false,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "in"
          },
          {
            "created_at": "Sat Sep 14 12:20:25 +0000 2019",
            "id": 1172847568990003201,
            "id_str": "1172847568990003201",
            "text": "RT @DedyDjun: ===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe tanggal 20…",
            "truncated": false,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "DedyDjun",
                  "name": "Indomie Lovers",
                  "id": 969608557,
                  "id_str": "969608557",
                  "indices": [
                    3,
                    12
                  ]
                }
              ],
              "urls": []
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 969608557,
              "id_str": "969608557",
              "name": "Indomie Lovers",
              "screen_name": "DedyDjun",
              "location": "Cirebon, Jawa Barat",
              "description": "founder : Djunmedia",
              "url": "https://t.co/gqNe7lhk3L",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/gqNe7lhk3L",
                      "expanded_url": "http://djunmedia.blogspot.co.id/",
                      "display_url": "djunmedia.blogspot.co.id",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 1039,
              "friends_count": 917,
              "listed_count": 2,
              "created_at": "Sun Nov 25 07:43:04 +0000 2012",
              "favourites_count": 806,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 14925,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "131516",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": true,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
              "profile_link_color": "009999",
              "profile_sidebar_border_color": "000000",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": false,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
              "created_at": "Sat Sep 14 03:23:00 +0000 2019",
              "id": 1172712322286022657,
              "id_str": "1172712322286022657",
              "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
              "truncated": true,
              "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                  {
                    "url": "https://t.co/Gpuxr48M3P",
                    "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                      117,
                      140
                    ]
                  }
                ]
              },
              "metadata": {
                "iso_language_code": "in",
                "result_type": "recent"
              },
              "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
              "in_reply_to_status_id": null,
              "in_reply_to_status_id_str": null,
              "in_reply_to_user_id": null,
              "in_reply_to_user_id_str": null,
              "in_reply_to_screen_name": null,
              "user": {
                "id": 969608557,
                "id_str": "969608557",
                "name": "Indomie Lovers",
                "screen_name": "DedyDjun",
                "location": "Cirebon, Jawa Barat",
                "description": "founder : Djunmedia",
                "url": "https://t.co/gqNe7lhk3L",
                "entities": {
                  "url": {
                    "urls": [
                      {
                        "url": "https://t.co/gqNe7lhk3L",
                        "expanded_url": "http://djunmedia.blogspot.co.id/",
                        "display_url": "djunmedia.blogspot.co.id",
                        "indices": [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  "description": {
                    "urls": []
                  }
                },
                "protected": false,
                "followers_count": 1039,
                "friends_count": 917,
                "listed_count": 2,
                "created_at": "Sun Nov 25 07:43:04 +0000 2012",
                "favourites_count": 806,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 14925,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
                "profile_link_color": "009999",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
              },
              "geo": null,
              "coordinates": null,
              "place": null,
              "contributors": null,
              "is_quote_status": false,
              "retweet_count": 7,
              "favorite_count": 3,
              "favorited": false,
              "retweeted": false,
              "possibly_sensitive": false,
              "lang": "in"
            },
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "in"
          },
          {
            "created_at": "Sat Sep 14 12:19:09 +0000 2019",
            "id": 1172847249543426049,
            "id_str": "1172847249543426049",
            "text": "RT @DedyDjun: ===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe tanggal 20…",
            "truncated": false,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "DedyDjun",
                  "name": "Indomie Lovers",
                  "id": 969608557,
                  "id_str": "969608557",
                  "indices": [
                    3,
                    12
                  ]
                }
              ],
              "urls": []
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 1081182756120317952,
              "id_str": "1081182756120317952",
              "name": "femi anjani",
              "screen_name": "sapasajafemi",
              "location": "Jawa Timur, Indonesia",
              "description": "orang biasa",
              "url": null,
              "entities": {
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 143,
              "friends_count": 206,
              "listed_count": 0,
              "created_at": "Fri Jan 04 13:37:11 +0000 2019",
              "favourites_count": 8043,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": false,
              "verified": false,
              "statuses_count": 2425,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "F5F8FA",
              "profile_background_image_url": null,
              "profile_background_image_url_https": null,
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1165640957821214722/b45iN4te_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165640957821214722/b45iN4te_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1081182756120317952/1568635949",
              "profile_link_color": "1DA1F2",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": true,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
              "created_at": "Sat Sep 14 03:23:00 +0000 2019",
              "id": 1172712322286022657,
              "id_str": "1172712322286022657",
              "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
              "truncated": true,
              "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                  {
                    "url": "https://t.co/Gpuxr48M3P",
                    "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                      117,
                      140
                    ]
                  }
                ]
              },
              "metadata": {
                "iso_language_code": "in",
                "result_type": "recent"
              },
              "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
              "in_reply_to_status_id": null,
              "in_reply_to_status_id_str": null,
              "in_reply_to_user_id": null,
              "in_reply_to_user_id_str": null,
              "in_reply_to_screen_name": null,
              "user": {
                "id": 969608557,
                "id_str": "969608557",
                "name": "Indomie Lovers",
                "screen_name": "DedyDjun",
                "location": "Cirebon, Jawa Barat",
                "description": "founder : Djunmedia",
                "url": "https://t.co/gqNe7lhk3L",
                "entities": {
                  "url": {
                    "urls": [
                      {
                        "url": "https://t.co/gqNe7lhk3L",
                        "expanded_url": "http://djunmedia.blogspot.co.id/",
                        "display_url": "djunmedia.blogspot.co.id",
                        "indices": [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  "description": {
                    "urls": []
                  }
                },
                "protected": false,
                "followers_count": 1039,
                "friends_count": 917,
                "listed_count": 2,
                "created_at": "Sun Nov 25 07:43:04 +0000 2012",
                "favourites_count": 806,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 14925,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
                "profile_link_color": "009999",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
              },
              "geo": null,
              "coordinates": null,
              "place": null,
              "contributors": null,
              "is_quote_status": false,
              "retweet_count": 7,
              "favorite_count": 3,
              "favorited": false,
              "retweeted": false,
              "possibly_sensitive": false,
              "lang": "in"
            },
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "in"
          },
          {
            "created_at": "Sat Sep 14 07:33:41 +0000 2019",
            "id": 1172775409349382145,
            "id_str": "1172775409349382145",
            "text": "RT @DedyDjun: ===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe tanggal 20…",
            "truncated": false,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "DedyDjun",
                  "name": "Indomie Lovers",
                  "id": 969608557,
                  "id_str": "969608557",
                  "indices": [
                    3,
                    12
                  ]
                }
              ],
              "urls": []
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 1081021783908601856,
              "id_str": "1081021783908601856",
              "name": "Calon menantu ibumu 🌻",
              "screen_name": "Agustin__enka",
              "location": "Indonesia ",
              "description": "Aku ini jelek karena cantik itu luka",
              "url": "https://t.co/V3giYPUUPL",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/V3giYPUUPL",
                      "expanded_url": "http://www.instagram.com//agustin_enka",
                      "display_url": "instagram.com//agustin_enka",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 190,
              "friends_count": 58,
              "listed_count": 0,
              "created_at": "Fri Jan 04 02:57:32 +0000 2019",
              "favourites_count": 3175,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 2973,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "F5F8FA",
              "profile_background_image_url": null,
              "profile_background_image_url_https": null,
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1162203793842249728/I4stlunS_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1162203793842249728/I4stlunS_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/1081021783908601856/1561269592",
              "profile_link_color": "1DA1F2",
              "profile_sidebar_border_color": "C0DEED",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": true,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
              "created_at": "Sat Sep 14 03:23:00 +0000 2019",
              "id": 1172712322286022657,
              "id_str": "1172712322286022657",
              "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
              "truncated": true,
              "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                  {
                    "url": "https://t.co/Gpuxr48M3P",
                    "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                      117,
                      140
                    ]
                  }
                ]
              },
              "metadata": {
                "iso_language_code": "in",
                "result_type": "recent"
              },
              "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
              "in_reply_to_status_id": null,
              "in_reply_to_status_id_str": null,
              "in_reply_to_user_id": null,
              "in_reply_to_user_id_str": null,
              "in_reply_to_screen_name": null,
              "user": {
                "id": 969608557,
                "id_str": "969608557",
                "name": "Indomie Lovers",
                "screen_name": "DedyDjun",
                "location": "Cirebon, Jawa Barat",
                "description": "founder : Djunmedia",
                "url": "https://t.co/gqNe7lhk3L",
                "entities": {
                  "url": {
                    "urls": [
                      {
                        "url": "https://t.co/gqNe7lhk3L",
                        "expanded_url": "http://djunmedia.blogspot.co.id/",
                        "display_url": "djunmedia.blogspot.co.id",
                        "indices": [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  "description": {
                    "urls": []
                  }
                },
                "protected": false,
                "followers_count": 1039,
                "friends_count": 917,
                "listed_count": 2,
                "created_at": "Sun Nov 25 07:43:04 +0000 2012",
                "favourites_count": 806,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 14925,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
                "profile_link_color": "009999",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
              },
              "geo": null,
              "coordinates": null,
              "place": null,
              "contributors": null,
              "is_quote_status": false,
              "retweet_count": 7,
              "favorite_count": 3,
              "favorited": false,
              "retweeted": false,
              "possibly_sensitive": false,
              "lang": "in"
            },
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "in"
          },
          {
            "created_at": "Sat Sep 14 04:02:01 +0000 2019",
            "id": 1172722140623192064,
            "id_str": "1172722140623192064",
            "text": "RT @DedyDjun: ===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe tanggal 20…",
            "truncated": false,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                {
                  "screen_name": "DedyDjun",
                  "name": "Indomie Lovers",
                  "id": 969608557,
                  "id_str": "969608557",
                  "indices": [
                    3,
                    12
                  ]
                }
              ],
              "urls": []
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 3171751644,
              "id_str": "3171751644",
              "name": "-",
              "screen_name": "37lgttng",
              "location": "West Java",
              "description": "",
              "url": null,
              "entities": {
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 214,
              "friends_count": 119,
              "listed_count": 0,
              "created_at": "Sat Apr 25 07:18:18 +0000 2015",
              "favourites_count": 573,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 2877,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "000000",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": false,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1173033811178688512/pcDjDwVo_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1173033811178688512/pcDjDwVo_normal.jpg",
              "profile_link_color": "F5ABB5",
              "profile_sidebar_border_color": "000000",
              "profile_sidebar_fill_color": "000000",
              "profile_text_color": "000000",
              "profile_use_background_image": false,
              "has_extended_profile": false,
              "default_profile": false,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "retweeted_status": {
              "created_at": "Sat Sep 14 03:23:00 +0000 2019",
              "id": 1172712322286022657,
              "id_str": "1172712322286022657",
              "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
              "truncated": true,
              "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [],
                "urls": [
                  {
                    "url": "https://t.co/Gpuxr48M3P",
                    "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                    "display_url": "twitter.com/i/web/status/1…",
                    "indices": [
                      117,
                      140
                    ]
                  }
                ]
              },
              "metadata": {
                "iso_language_code": "in",
                "result_type": "recent"
              },
              "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
              "in_reply_to_status_id": null,
              "in_reply_to_status_id_str": null,
              "in_reply_to_user_id": null,
              "in_reply_to_user_id_str": null,
              "in_reply_to_screen_name": null,
              "user": {
                "id": 969608557,
                "id_str": "969608557",
                "name": "Indomie Lovers",
                "screen_name": "DedyDjun",
                "location": "Cirebon, Jawa Barat",
                "description": "founder : Djunmedia",
                "url": "https://t.co/gqNe7lhk3L",
                "entities": {
                  "url": {
                    "urls": [
                      {
                        "url": "https://t.co/gqNe7lhk3L",
                        "expanded_url": "http://djunmedia.blogspot.co.id/",
                        "display_url": "djunmedia.blogspot.co.id",
                        "indices": [
                          0,
                          23
                        ]
                      }
                    ]
                  },
                  "description": {
                    "urls": []
                  }
                },
                "protected": false,
                "followers_count": 1039,
                "friends_count": 917,
                "listed_count": 2,
                "created_at": "Sun Nov 25 07:43:04 +0000 2012",
                "favourites_count": 806,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 14925,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": true,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
                "profile_link_color": "009999",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": true,
                "default_profile": false,
                "default_profile_image": false,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
              },
              "geo": null,
              "coordinates": null,
              "place": null,
              "contributors": null,
              "is_quote_status": false,
              "retweet_count": 7,
              "favorite_count": 3,
              "favorited": false,
              "retweeted": false,
              "possibly_sensitive": false,
              "lang": "in"
            },
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "lang": "in"
          },
          {
            "created_at": "Sat Sep 14 03:23:00 +0000 2019",
            "id": 1172712322286022657,
            "id_str": "1172712322286022657",
            "text": "===  TWITTER PLEASE DO YOUR MAGIC ✨ \n\nAku lagi jualan kaos nih. Harganya murah cuma 125.000, lagi pre-order sampe t… https://t.co/Gpuxr48M3P",
            "truncated": true,
            "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [],
              "urls": [
                {
                  "url": "https://t.co/Gpuxr48M3P",
                  "expanded_url": "https://twitter.com/i/web/status/1172712322286022657",
                  "display_url": "twitter.com/i/web/status/1…",
                  "indices": [
                    117,
                    140
                  ]
                }
              ]
            },
            "metadata": {
              "iso_language_code": "in",
              "result_type": "recent"
            },
            "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
              "id": 969608557,
              "id_str": "969608557",
              "name": "Indomie Lovers",
              "screen_name": "DedyDjun",
              "location": "Cirebon, Jawa Barat",
              "description": "founder : Djunmedia",
              "url": "https://t.co/gqNe7lhk3L",
              "entities": {
                "url": {
                  "urls": [
                    {
                      "url": "https://t.co/gqNe7lhk3L",
                      "expanded_url": "http://djunmedia.blogspot.co.id/",
                      "display_url": "djunmedia.blogspot.co.id",
                      "indices": [
                        0,
                        23
                      ]
                    }
                  ]
                },
                "description": {
                  "urls": []
                }
              },
              "protected": false,
              "followers_count": 1039,
              "friends_count": 917,
              "listed_count": 2,
              "created_at": "Sun Nov 25 07:43:04 +0000 2012",
              "favourites_count": 806,
              "utc_offset": null,
              "time_zone": null,
              "geo_enabled": true,
              "verified": false,
              "statuses_count": 14925,
              "lang": null,
              "contributors_enabled": false,
              "is_translator": false,
              "is_translation_enabled": false,
              "profile_background_color": "131516",
              "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
              "profile_background_tile": true,
              "profile_image_url": "http://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
              "profile_image_url_https": "https://pbs.twimg.com/profile_images/1165396410549723136/zmcI6K_o_normal.jpg",
              "profile_banner_url": "https://pbs.twimg.com/profile_banners/969608557/1542522718",
              "profile_link_color": "009999",
              "profile_sidebar_border_color": "000000",
              "profile_sidebar_fill_color": "DDEEF6",
              "profile_text_color": "333333",
              "profile_use_background_image": true,
              "has_extended_profile": true,
              "default_profile": false,
              "default_profile_image": false,
              "following": null,
              "follow_request_sent": null,
              "notifications": null,
              "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 7,
            "favorite_count": 3,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "in"
          }
        ],
        "search_metadata": {
          "completed_in": 0.028,
          "max_id": 1173575656187187200,
          "max_id_str": "1173575656187187200",
          "next_results": "?max_id=1172712322286022656&q=%23teesindonesia&include_entities=1",
          "query": "%23teesindonesia",
          "refresh_url": "?since_id=1173575656187187200&q=%23teesindonesia&include_entities=1",
          "count": 15,
          "since_id": 0,
          "since_id_str": "0"
        }
      }]
    console.log('response', $scope.data);
  });
