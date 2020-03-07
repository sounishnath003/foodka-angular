import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ResturantsDetailsService {
  constructor() {}

  getResturantsData() {
    return [
      {
        id: 1,
        resturantName: "Desi Bites",
        imgUrl:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/j3b73pbghmzufj6uwyob",
        about: {
          cost: "₹2000",
          rating: "3.6",
          votes: "1396 votes",
          bio: "Casual Dining",
          foodType: [
            "Biryani, ",
            "North Indian, ",
            "Mughlai, ",
            "Chinese, ",
            "Bengali"
          ]
        },
        address: {
          street: "Maa Sarada Road, Noapara",
          area: "Barasat",
          city: "kolkata"
        },
        currentStatus: "Open now",
        time: {
          opening: "12:30",
          closing: "12 midnight",
          days: "Mon-Sun"
        },
        discount: "15% off on first order",

        orderOnline: {
          title: "Order Online",
          orderStatus: "currently unavailable online service",
          coupons: ["40% OFF", "15% OFF", "₹200 CB"]
        },
        foods: {
          veg: {
            bestsellers: [
              {
                itemName: "Veg Fried Rice",
                itemUrl:
                  "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2019/05/teriyaki-rice-prawns.jpg",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Exotic Veg Fried Rice",
                itemUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKem0Ps_AliRCQYADWykuxPVLY2cZeCtB4xwCIdyGH2_YRdlGn",
                price: {
                  old: "₹140",
                  new: "₹110.50"
                }
              }
            ],
            resturantRecomm: [
              {
                itemName: "Veg Pulao",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Crispy Chilli Baby Corn",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/0b8/8addc9c2a08d6db7f4d74b2ba5e370b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹155",
                  new: "₹131.75"
                }
              }
            ],
            studentCombo: [
              {
                itemName: "Paneer Butter Masala [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Chilly Paneer Combo [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Veg Hakka with [3 Pieces] Chili Paneer",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              },
              {
                itemName: "Veg Fried Rice with [3 Piece] Szechuan Paneer",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              }
            ],
            soups: [
              {
                itemName: "Veg Manchow Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hot N Sour Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Lemon Coriander Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Tom Yum Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            starters: [
              {
                itemName: "Chilli Potato",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Salt and Pepper Mushroom",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Dry Paneer Chilli [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            mainCourse: [
              {
                itemName: "Paneer Labadar [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kadai Paneer [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Paneer Pasanda [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Paneer Makhani [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kashmiri Aloo Dum [4 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            rice: [
              {
                itemName: "Basanti Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Peas Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Jeera Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Basmati Steamed Rice",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            chinese: [
              {
                itemName: "Exotic Veg in Schezwan Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Exotic Veg in Hot Garlic Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hakka Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hawaiian Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            desserts: [
              {
                itemName: "Fresh Fruit Salad",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ]
          },
          nonveg: {
            bestsellers: [
              {
                itemName: "Veg Pulao And Chicken Kasa [2 Pieces] And Salad",
                itemUrl:
                  "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2019/05/teriyaki-rice-prawns.jpg",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Egg Fried Rice With Hot Garlic Chicken [3 Pieces]",
                itemUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKem0Ps_AliRCQYADWykuxPVLY2cZeCtB4xwCIdyGH2_YRdlGn",
                price: {
                  old: "₹140",
                  new: "₹110.50"
                }
              }
            ],
            resturantRecomm: [
              {
                itemName: "Jera Rice With [2 Pieces] Chicken Kossa with Salad",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Kadai Chicken [4 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Chicken in Manchurian Sauce [6 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Shahi Chicken Chaap [1 Piece]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Chicken Kosha [4 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/0b8/8addc9c2a08d6db7f4d74b2ba5e370b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹155",
                  new: "₹131.75"
                }
              }
            ],
            studentCombo: [
              {
                itemName: "Egg Hakka With [3 Pieces] Szechuan Chicken",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Chilly Paneer Combo [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Egg Fried Rice With Hot Garlic Chicken [3 Pieces]",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              },
              {
                itemName: "Veg Pulao And Chicken Kasa [2 Pieces] And Salad",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              }
            ],
            soups: [
              {
                itemName: "Chicken Manchow Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hot N Sour Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Lemon Coriander Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Tom Yum Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            starters: [
              {
                itemName: "Dragon Chicken [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Chicken Salt and Pepper [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Dry chicken Chilli [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            mainCourse: [
              {
                itemName: "chicken Labadar [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kadai chicken [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Pasanda [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Makhani [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kashmiri Aloo Dum with chicken [4 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            rice: [
              {
                itemName: "Chicken dum Biryani",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Special dum Biryani",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            chinese: [
              {
                itemName: "Exotic Chicken in Schezwan Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Exotic chicken in Hot Garlic Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hakka Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hawaiian Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            desserts: [
              {
                itemName: "Fresh Fruit Salad",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ]
          }
        }
      },
      {
        id: 2,
        resturantName: "Awesome Khana",
        imgUrl:
          "https://b.zmtcdn.com/data/pictures/9/18560739/81a57cdaf850b933c58dca14e752ebd2.jpg?output-format=webp",
        about: {
          cost: "₹2000",
          rating: "3.6",
          votes: "1396 votes",
          bio: "Casual Pub, Smooked",
          foodType: [
            "Biryani, ",
            "North Indian, ",
            "Mughlai, ",
            "Chinese, ",
            "Bengali"
          ]
        },
        address: {
          street: "Maa Sarada Road, Noapara",
          area: "Barasat",
          city: "kolkata"
        },
        currentStatus: "Open now",
        time: {
          opening: "12:30",
          closing: "12 midnight",
          days: "Mon-Sun"
        },
        discount: "15% off on first order",

        orderOnline: {
          title: "Order Online",
          orderStatus: "currently unavailable online service",
          coupons: ["40% OFF", "15% OFF", "₹200 CB"]
        },
        foods: {
          veg: {
            bestsellers: [
              {
                itemName: "Veg Fried Rice",
                itemUrl:
                  "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2019/05/teriyaki-rice-prawns.jpg",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Exotic Veg Fried Rice",
                itemUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKem0Ps_AliRCQYADWykuxPVLY2cZeCtB4xwCIdyGH2_YRdlGn",
                price: {
                  old: "₹140",
                  new: "₹110.50"
                }
              }
            ],
            resturantRecomm: [
              {
                itemName: "Veg Pulao",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Crispy Chilli Baby Corn",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/0b8/8addc9c2a08d6db7f4d74b2ba5e370b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹155",
                  new: "₹131.75"
                }
              }
            ],
            studentCombo: [
              {
                itemName: "Paneer Butter Masala [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Chilly Paneer Combo [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Veg Hakka with [3 Pieces] Chili Paneer",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              },
              {
                itemName: "Veg Fried Rice with [3 Piece] Szechuan Paneer",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              }
            ],
            soups: [
              {
                itemName: "Veg Manchow Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hot N Sour Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Lemon Coriander Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Tom Yum Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            starters: [
              {
                itemName: "Chilli Potato",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Salt and Pepper Mushroom",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Dry Paneer Chilli [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            mainCourse: [
              {
                itemName: "Paneer Labadar [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kadai Paneer [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Paneer Pasanda [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Paneer Makhani [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kashmiri Aloo Dum [4 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            rice: [
              {
                itemName: "Basanti Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Peas Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Jeera Pulao",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Basmati Steamed Rice",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            chinese: [
              {
                itemName: "Exotic Veg in Schezwan Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Exotic Veg in Hot Garlic Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hakka Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Veg Hawaiian Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            desserts: [
              {
                itemName: "Fresh Fruit Salad",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ]
          },
          nonveg: {
            bestsellers: [
              {
                itemName: "Veg Pulao And Chicken Kasa [2 Pieces] And Salad",
                itemUrl:
                  "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2019/05/teriyaki-rice-prawns.jpg",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Egg Fried Rice With Hot Garlic Chicken [3 Pieces]",
                itemUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKem0Ps_AliRCQYADWykuxPVLY2cZeCtB4xwCIdyGH2_YRdlGn",
                price: {
                  old: "₹140",
                  new: "₹110.50"
                }
              }
            ],
            resturantRecomm: [
              {
                itemName: "eera Rice With [2 Pieces] Chicken Kossa with Salad",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Kadai Chicken [4 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Chicken in Manchurian Sauce [6 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Shahi Chicken Chaap [1 Piece]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/1d8/1cdf63c155b63672e0852c8b99e0b1d8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹150",
                  new: "₹127.50"
                }
              },
              {
                itemName: "Chicken Kosha [4 Pieces]",
                itemUrl:
                  "https://b.zmtcdn.com/data/dish_photos/0b8/8addc9c2a08d6db7f4d74b2ba5e370b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                price: {
                  old: "₹155",
                  new: "₹131.75"
                }
              }
            ],
            studentCombo: [
              {
                itemName: "Egg Hakka With [3 Pieces] Szechuan Chicken",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Chilly Paneer Combo [6 Pieces]",
                price: {
                  old: "₹210",
                  new: "₹181.75"
                }
              },
              {
                itemName: "Egg Fried Rice With Hot Garlic Chicken [3 Pieces]",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              },
              {
                itemName: "Veg Pulao And Chicken Kasa [2 Pieces] And Salad",
                price: {
                  old: "₹180",
                  new: "₹161.75"
                }
              }
            ],
            soups: [
              {
                itemName: "Chicken Manchow Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hot N Sour Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Lemon Coriander Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Tom Yum Soup",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            starters: [
              {
                itemName: "Dragon Chicken [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Chicken Salt and Pepper [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Dry chicken Chilli [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            mainCourse: [
              {
                itemName: "chicken Labadar [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kadai chicken [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Pasanda [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Makhani [6 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Kashmiri Aloo Dum with chicken [4 Pieces]",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            rice: [
              {
                itemName: "Chicken dum Biryani",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Special dum Biryani",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            chinese: [
              {
                itemName: "Exotic Chicken in Schezwan Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "Exotic chicken in Hot Garlic Sauce",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hakka Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              },
              {
                itemName: "chicken Hawaiian Noodles",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ],
            desserts: [
              {
                itemName: "Fresh Fruit Salad",
                price: {
                  old: "₹80",
                  new: "₹61.75"
                }
              }
            ]
          }
        },
      }
    ];
  } 


  getResturantById = (resturantID: number) => {
    const allResturants = this.getResturantsData() ;
    for (const resturant of allResturants) {
      if(resturant.id == resturantID) {
        return resturant ;
      }else{break;}
    }
  }

}
