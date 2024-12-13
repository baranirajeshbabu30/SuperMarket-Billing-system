export interface Product {
    productId: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    categoryId: number;
  }
  
  export interface Cart {
    cartId: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    categoryId: number;
    count?: number; 
  }
  export const PRODUCTS: Product[] = [
    { productId: 101, name: "Apple", description: "Fresh and crispy apples.", quantity: 1.5, price: 30.0, categoryId: 2 },
    { productId: 102, name: "Banana", description: "Rich in potassium and fiber.", quantity: 1.2, price: 22.0, categoryId: 2 },
    { productId: 103, name: "Carrot", description: "Organic and fresh carrots.", quantity: 2.0, price: 25.0, categoryId: 2 },
    { productId: 104, name: "Tomato", description: "Juicy and ripe tomatoes.", quantity: 1.8, price: 28.0, categoryId: 2 },
    { productId: 105, name: "Spinach", description: "Rich in iron and vitamins.", quantity: 1.0, price: 24.0, categoryId: 2 },
    { productId: 201, name: "Milk", description: "Low-fat milk in 1-liter packs.", quantity: 1.0, price: 22.0, categoryId: 3 },
    { productId: 202, name: "Butter", description: "Creamy and smooth butter.", quantity: 0.25, price: 30.0, categoryId: 3 },
    { productId: 203, name: "Cheese", description: "Rich and creamy cheese blocks.", quantity: 0.5, price: 40.0, categoryId: 3 },
    { productId: 204, name: "Eggs (12 Pack)", description: "Farm-fresh eggs.", quantity: 0.75, price: 25.0, categoryId: 3 },
    { productId: 205, name: "Yogurt", description: "Healthy and probiotic yogurt.", quantity: 1.0, price: 30.0, categoryId: 3 },
    { productId: 301, name: "Bread", description: "Whole grain bread.", quantity: 0.5, price: 22.0, categoryId: 4 },
    { productId: 302, name: "Cookies", description: "Assorted cookies in a 500g pack.", quantity: 0.5, price: 28.0, categoryId: 4 },
    { productId: 303, name: "Cake", description: "Delicious chocolate cake.", quantity: 0.7, price: 55.0, categoryId: 4 },
    { productId: 304, name: "Chips", description: "Crunchy potato chips.", quantity: 0.2, price: 25.0, categoryId: 4 },
    { productId: 305, name: "Muffins", description: "Soft and fluffy muffins.", quantity: 0.4, price: 28.0, categoryId: 4 },
    { productId: 401, name: "Chicken Breast", description: "Boneless chicken breasts.", quantity: 1.0, price: 45.0, categoryId: 5 },
    { productId: 402, name: "Salmon", description: "Fresh Atlantic salmon fillets.", quantity: 0.5, price: 75.0, categoryId: 5 },
    { productId: 403, name: "Beef", description: "Tender and juicy beef steaks.", quantity: 1.0, price: 60.0, categoryId: 5 },
    { productId: 404, name: "Shrimp", description: "Fresh and cleaned shrimps.", quantity: 0.5, price: 80.0, categoryId: 5 },
    { productId: 405, name: "Pork Chops", description: "Thick cut pork chops.", quantity: 1.2, price: 50.0, categoryId: 5 },
    { productId: 501, name: "Coca-Cola", description: "Chilled and refreshing drink.", quantity: 1.0, price: 22.0, categoryId: 6 },
    { productId: 502, name: "Orange Juice", description: "Fresh and tangy orange juice.", quantity: 1.0, price: 30.0, categoryId: 6 },
    { productId: 503, name: "Mineral Water", description: "Pure and safe drinking water.", quantity: 1.0, price: 22.0, categoryId: 6 },
    { productId: 504, name: "Coffee", description: "Premium roasted coffee beans.", quantity: 0.25, price: 40.0, categoryId: 6 },
    { productId: 505, name: "Tea", description: "Aromatic and soothing tea.", quantity: 0.2, price: 30.0, categoryId: 6 },
    { productId: 601, name: "Detergent", description: "Powerful stain remover detergent.", quantity: 1.0, price: 40.0, categoryId: 7 },
    { productId: 602, name: "Toilet Paper", description: "Soft and strong toilet rolls.", quantity: 0.5, price: 30.0, categoryId: 7 },
    { productId: 603, name: "Dish Soap", description: "Effective grease-cutting soap.", quantity: 0.5, price: 25.0, categoryId: 7 },
    { productId: 604, name: "Mop", description: "Durable and easy-to-use mop.", quantity: 0.7, price: 35.0, categoryId: 7 },
    { productId: 605, name: "Trash Bags", description: "Heavy-duty garbage bags.", quantity: 1.0, price: 25.0, categoryId: 7 },
    { productId: 701, name: "Shampoo", description: "Nourishing hair shampoo.", quantity: 0.5, price: 45.0, categoryId: 8 },
    { productId: 702, name: "Face Cream", description: "Hydrating and brightening cream.", quantity: 0.2, price: 50.0, categoryId: 8 },
    { productId: 703, name: "Toothpaste", description: "Fresh breath and clean teeth.", quantity: 0.2, price: 30.0, categoryId: 8 },
    { productId: 704, name: "Hair Oil", description: "Promotes healthy hair growth.", quantity: 0.3, price: 35.0, categoryId: 8 },
    { productId: 705, name: "Sunscreen", description: "SPF 50 broad-spectrum sunscreen.", quantity: 0.1, price: 50.0, categoryId: 8 },
    { productId: 801, name: "Rice", description: "Premium basmati rice.", quantity: 2.0, price: 60.0, categoryId: 9 },
    { productId: 802, name: "Wheat Flour", description: "Fine and fresh flour.", quantity: 1.5, price: 30.0, categoryId: 9 },
    { productId: 803, name: "Lentils", description: "Rich in protein and fiber.", quantity: 1.0, price: 35.0, categoryId: 9 },
    { productId: 804, name: "Sugar", description: "Granulated white sugar.", quantity: 1.0, price: 25.0, categoryId: 9 },
    { productId: 805, name: "Spices", description: "Aromatic whole spices.", quantity: 0.2, price: 45.0, categoryId: 9 },
    { productId: 901, name: "Ice Cream", description: "Rich and creamy ice cream.", quantity: 0.5, price: 55.0, categoryId: 10 },
    { productId: 902, name: "Frozen Pizza", description: "Quick and delicious meal.", quantity: 0.6, price: 65.0, categoryId: 10 },
    { productId: 903, name: "Frozen Peas", description: "Fresh and tender peas.", quantity: 1.0, price: 45.0, categoryId: 10 },
    { productId: 904, name: "Chicken Nuggets", description: "Crispy frozen nuggets.", quantity: 0.5, price: 60.0, categoryId: 10 },
    { productId: 905, name: "French Fries", description: "Golden and crispy fries.", quantity: 1.0, price: 50.0, categoryId: 10 },
    { productId: 1001, name: "Baby Food", description: "Nutritious baby food packs.", quantity: 0.5, price: 35.0, categoryId: 11 },
    { productId: 1002, name: "Diapers", description: "Soft and absorbent diapers.", quantity: 0.5, price: 30.0, categoryId: 11 },
    { productId: 1003, name: "Baby Shampoo", description: "Gentle and tear-free shampoo.", quantity: 0.2, price: 25.0, categoryId: 11 },
    { productId: 1004, name: "Baby Wipes", description: "Soft and sensitive wipes.", quantity: 0.3, price: 28.0, categoryId: 11 },
    { productId: 1005, name: "Baby Lotion", description: "Moisturizing baby lotion.", quantity: 0.2, price: 32.0, categoryId: 11 }
];

