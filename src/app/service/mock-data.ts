export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "All Items",
    description: "All items in the store",
    image: "assets/images/supermarket.jpg", 
  },
  {
    id: 2,
    name: "Fruits & Vegetables",
    description: "Fresh fruits and vegetables sourced daily.",
    image: "assets/images/fruits-vegetables.jpg", 
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    description: "Milk, butter, cheese, and eggs from trusted brands.",
    image: "assets/images/dairy-eggs.jpg",
  },
  {
    id: 4,
    name: "Bakery & Snacks",
    description: "Bread, cakes, cookies, and a variety of snacks.",
    image: "assets/images/bakery-snacks.jpg",
  },
  {
    id: 5,
    name: "Meat & Seafood",
    description: "Fresh cuts of meat and seafood for every taste.",
    image: "assets/images/meat-seafood.jpg",
  },
  {
    id: 6,
    name: "Beverages",
    description: "Soft drinks, juices, water, and more.",
    image: "assets/images/beverages.jpg",
  },
  {
    id: 7,
    name: "Household Essentials",
    description: "Cleaning products, toiletries, and everyday necessities.",
    image: "assets/images/household-essentials.jpg",
  },
  {
    id: 8,
    name: "Health & Beauty",
    description: "Skincare, haircare, and health supplements.",
    image: "assets/images/health-beauty.jpg",
  },
  {
    id: 9,
    name: "Groceries",
    description: "Staples like rice, flour, pulses, and spices.",
    image: "assets/images/groceries.jpg",
  },
  {
    id: 10,
    name: "Frozen Foods",
    description: "Ice creams, frozen veggies, and ready-to-eat meals.",
    image: "assets/images/frozen-foods.jpg",
  },
  {
    id: 11,
    name: "Baby Products",
    description: "Baby food, diapers, and other baby care essentials.",
    image: "assets/images/baby-products.jpg",
  },
];
