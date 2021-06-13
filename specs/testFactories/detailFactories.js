export const restaurantResponse = {
  "restaurant": {
    "id": "rqdv5juczeskfw1e867",
    "name": "Melting Pot",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
    "city": "Medan",
    "address": "Jln. Pandeglang no 19",
    "pictureId": "14",
    "categories": [
      {
        "name": "Italia"
      },
      {
        "name": "Modern"
      }
    ],
    "menus": {
      "foods": [
        {
            "name": "Paket rosemary"
        },
        {
            "name": "Toastie salmon"
        },
        {
            "name": "Bebek crepes"
        },
        {
            "name": "Salad lengkeng"
        }
      ],
      "drinks": [
        {
            "name": "Es krim"
        },
        {
            "name": "Sirup"
        },
        {
            "name": "Jus apel"
        },
        {
            "name": "Jus jeruk"
        },
        {
            "name": "Coklat panas"
        },
        {
            "name": "Air"
        },
        {
            "name": "Es kopi"
        },
        {
            "name": "Jus alpukat"
        },
        {
            "name": "Jus mangga"
        },
        {
            "name": "Teh manis"
        },
        {
            "name": "Kopi espresso"
        },
        {
            "name": "Minuman soda"
        },
        {
            "name": "Jus tomat"
        }
      ]
    },
    "rating": 4.2,
    "customerReviews": [
        {
          "name": "Ahmad",
          "review": "Tidak rekomendasi untuk pelajar!",
          "date": "13 November 2019"
        },
        {
          "name": "Khoirul Huda",
          "review": "Luar Biasa",
          "date": "12 Juni 2021"
        },
        {
          "name": "PEMIRSA",
          "review": "Test",
          "date": "12 Juni 2021"
        },
        {
          "name": "superman",
          "review": "testt review",
          "date": "12 Juni 2021"
        },
        {
          "name": "Ais",
          "review": "Wow",
          "date": "12 Juni 2021"
        },
        {
          "name": "Dona",
          "review": "Suka suka suka suka",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan bang",
          "date": "12 Juni 2021"
        },
        {
          "name": "kim",
          "review": "tetesss",
          "date": "12 Juni 2021"
        },
        {
          "name": "Hidayah",
          "review": "Tempatnya bagus dan nyaman.",
          "date": "12 Juni 2021"
        },
        {
          "name": "lala",
          "review": "selamat makan siang",
          "date": "12 Juni 2021"
        },
        {
          "name": "Rigen",
          "review": "Sabtu",
          "date": "12 Juni 2021"
        },
        {
          "name": "Sabtu",
          "review": "Senin",
          "date": "12 Juni 2021"
        },
        {
          "name": "hdtj",
          "review": "htdj",
          "date": "12 Juni 2021"
        },
        {
          "name": "Mahal",
          "review": "ya memang mahal",
          "date": "12 Juni 2021"
        },
        {
          "name": "Hallo",
          "review": "Hallo",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan bang",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan bang",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan skuy",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan skuy",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan bang",
          "date": "12 Juni 2021"
        },
        {
          "name": "Alex",
          "review": "Makan",
          "date": "12 Juni 2021"
        },
        {
          "name": "Name1",
          "review": "Comment1",
          "date": "12 Juni 2021"
        }
    ]
  }
};

export const detailResponse = {
  "error": false,
  "message": "success",
  ...restaurantResponse
};

export const addReviewResponse = {
  "error": false,
  "message": "success",
  "customerReviews": [
    {
      "name": "Ahmad",
      "review": "Tidak rekomendasi untuk pelajar!",
      "date": "13 November 2019"
    },
    {
      "name": "test",
      "review": "makanannya lezat",
      "date": "29 Oktober 2020"
    }
  ]
};
