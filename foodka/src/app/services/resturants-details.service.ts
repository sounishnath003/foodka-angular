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
        menuImgUrl:
          "https://b.zmtcdn.com/data/menus/590/18354590/801afdf56883bb72a94458b909f2b4b5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        imgUrl:
          "https://b.zmtcdn.com/data/pictures/0/18354590/03c1ca9eab52d48571a730f50f0db355.jpg?output-format=webp",
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
        menuImgUrl:
          "https://b.zmtcdn.com/data/menus/739/18560739/6b82464a5e1967d206d82a02996c9fda.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        imgUrl:
          "https://b.zmtcdn.com/data/pictures/9/18560739/81a57cdaf850b933c58dca14e752ebd2.jpg?output-format=webp",
        about: {
          cost: "₹2000",
          rating: "4.1",
          votes: "1701 votes",
          bio: "Quick Bite, Smooked",
          foodType: ["North Indian, ", "Fast Food, ", "Chinese, ", "Biryani"]
        },
        address: {
          street: "KB Basu Road",
          area: "Barasat",
          city: "kolkata"
        },
        currentStatus: "Open now",
        time: {
          opening: "11 am",
          closing: "11.30 midnight",
          days: "Mon-Sun"
        },
        discount: "10% off on first order",

        orderOnline: {
          title: "Order Online",
          orderStatus: "currently unavailable online service",
          coupons: ["30% OFF", "13% OFF", "₹180 CB"]
        },
        foods: {
          veg: {
            bestsellers: [
              {
                itemName: "Veg Chow with Drumstick and Kimchi Salad Combo",
                itemUrl:
                  "data:image/jpeg;base64,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",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Mixed Fried Rice",
                itemUrl:
                  "data:image/jpeg;base64,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",
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
                itemName: "Amritasri Jumbo Leg Fry",
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
                itemName: "Chilly Wings (6 Pcs)",
                itemUrl:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1FCZfH312iHRjV0p8ll61URufH02jjKx31r9yHHyXGtt0sWP-",
                price: {
                  old: "₹110",
                  new: "₹93.50"
                }
              },
              {
                itemName: "Fried Chicken Breast [2 Pieces]",
                itemUrl:
                  "data:image/jpeg;base64,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",
                price: {
                  old: "₹140",
                  new: "₹110.50"
                }
              }
            ],
            resturantRecomm: [
              {
                itemName: "Fish Kabirazi Cutlet with Salad",
                itemUrl:
                  "data:image/jpeg;base64,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",
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
