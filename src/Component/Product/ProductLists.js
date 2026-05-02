import MenFormalShirts from "../../assets/men-formal-shirts.png";
import MenHoodie from "../../assets/men-hoodie.jpg";
import MenTShirt from "../../assets/men-tshirt.png";
import WomenJoggers from "../../assets/women-joggers.jpg";
import WomenKurtis from "../../assets/women-kurtis.jpg";
import WomenActiveWear from "../../assets/women-activewear.jpg";
import MenJeans from "../../assets/men-jeans.jpg";
import WomenDress from "../../assets/women-dress.jpg";
import BoyHoodies from "../../assets/boy-hoodie.jpg";
import GirlsSweatShirts from "../../assets/girls-sweatshirts.jpg";
import BoyTshirts from "../../assets/boy-tshirts.jpg";
import GirlsPartyWear from "../../assets/girls-partywear.jpg";

const products = [
  {
    id: 1,
    name: "Long Sleeve Shirt",
    image: MenFormalShirts,
    price: 25.99,
    oldPrice: 35.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 2,
    name: "Hoodie",
    image: MenHoodie,
    price: 45.0,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 3,
    name: "T-Shirt",
    image: MenTShirt,
    price: 89.99,
    oldPrice: 129.99,
    onSale: true,
    newArrival: false,
    category: "Mens",
  },
  {
    id: 4,
    name: "Joggers",
    image: WomenJoggers,
    price: 39.99,
    oldPrice: 59.99,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
  {
    id: 5,
    name: "Kurtis",
    image: WomenKurtis,
    price: 29.99,
    oldPrice: null,
    onSale: false,
    newArrival: false,
    category: "Womens",
  },
  {
    id: 6,
    name: "Active Wear",
    image: WomenActiveWear,
    price: 49.99,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Womens",
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    image: MenJeans,
    price: 120.0,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Mens",
  },
  {
    id: 8,
    name: "Dress",
    image: WomenDress,
    price: 65.0,
    oldPrice: 85.0,
    onSale: true,
    newArrival: false,
    category: "Womens",
  },
  {
    id: 9,
    name: "Boys Hoodie",
    image: BoyHoodies,
    price: 15.99,
    oldPrice: 20.99,
    onSale: true,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 10,
    name: "Girls Sweatshirt",
    image: GirlsSweatShirts,
    price: 22.0,
    oldPrice: null,
    onSale: false,
    newArrival: true,
    category: "Kids",
  },
  {
    id: 11,
    name: "Boys T-Shirt",
    image: BoyTshirts,
    price: 35.0,
    oldPrice: 45.0,
    onSale: true,
    newArrival: false,
    category: "Kids",
  },
  {
    id: 12,
    name: "Girls Party Wear",
    image: GirlsPartyWear,
    price: 10.0,
    oldPrice: 18.0,
    onSale: true,
    newArrival: false,
    category: "Kids",
  },
];

export default products;