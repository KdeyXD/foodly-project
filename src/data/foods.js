import pizzaImage from "../assets/images/Pizza1.jpg";
import burgerImage from "../assets/images/Burger1.jpg";
import sushiImage from "../assets/images/Sushi1.jpg";
import pastaImage from "../assets/images/Pasta1.jpg";
import saladImage from "../assets/images/Salad1.jpg";
const foods = [
  {
    id: 1,
    name: "Pizza",
    description: "A delicious cheese pizza with a crispy crust.",
    category: "Pizza | ភីហ្សា",
    price: 9.99,
    readyTime: 15,
    rating: 4.7,
    image: pizzaImage,
  },
  {
    id: 2,
    name: "Burger",
    description: "A juicy beef burger with lettuce, tomato, and cheese.",
    category: "Burger | ប៊ឺហ្គឺ",
    price: 8.99,
    readyTime: 10,
    rating: 4.2,
    image: burgerImage,
  },
  {
    id: 3,
    name: "Sushi",
    description: "Fresh sushi rolls with salmon and avocado.",
    category: "Sushi | ស៊ូស៊ី",
    price: 12.99,
    readyTime: 20,
    rating: 4.5,
    image: sushiImage,
  },
  {
    id: 4,
    name: "Pasta",
    description: "Creamy Alfredo pasta with grilled chicken.",
    category: "Pasta | បាស្តា",
    price: 11.99,
    readyTime: 18,
    rating: 4.3,
    image: pastaImage,
  },
  {
    id: 5,
    name: "Salad",
    description: "A fresh garden salad with mixed greens and vinaigrette.",
    category: "Salad | សាឡាត់",
    price: 7.99,
    readyTime: 8,
    rating: 4.0,
    image: saladImage,
  },
];

export default foods;