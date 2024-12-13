export interface Category {
  id: number;
  name: string;
  description: string;
  image: any;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "All Items",
    description: "All items in the store",
    image: "images/supermarket.jpg", 
  },
  {
    id: 2,
    name: "Fruits & Vegetables",
    description: "Fresh fruits and vegetables sourced daily.",
    image: "images/fruits-vegetables.jpg", 
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    description: "Milk, butter, cheese, and eggs from trusted brands.",
    image: "images/dairy-eggs.jpg",
  },
  {
    id: 4,
    name: "Bakery & Snacks",
    description: "Bread, cakes, cookies, and a variety of snacks.",
    image: "images/bakery-snacks.jpg",
  },
  {
    id: 5,
    name: "Meat & Seafood",
    description: "Fresh cuts of meat and seafood for every taste.",
    image: "images/meat-seafood.jpg",
  },
  {
    id: 6,
    name: "Beverages",
    description: "Soft drinks, juices, water, and more.",
    image: "images/beverages.jpg",
  },
  {
    id: 7,
    name: "Household Essentials",
    description: "Cleaning products, toiletries, and everyday necessities.",
    image: "images/household-essentials.jpg",
  },
  {
    id: 8,
    name: "Health & Beauty",
    description: "Skincare, haircare, and health supplements.",
    image: "images/health-beauty.jpg",
  },
  {
    id: 9,
    name: "Groceries",
    description: "Staples like rice, flour, pulses, and spices.",
    image: "images/groceries.jpg",
  },
  {
    id: 10,
    name: "Frozen Foods",
    description: "Ice creams, frozen veggies, and ready-to-eat meals.",
    image: "images/frozen-foods.jpg",
  },
  {
    id: 11,
    name: "Baby Products",
    description: "Baby food, diapers, and other baby care essentials.",
    image: "images/baby-products.jpg",
  },
];
