import React from "react";
import img from "./images/bike.jpg";
import img1 from "./images/bike1.jpg";
import img2 from "./images/bike2.jpg";
import img3 from "./images/bike3.webp";
import logo from "./images/logo.png";
import point from "./images/point.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const bikeData = [
  {
    name: "Model K",
    image: img1,
    price: "$350.00",
    category: "Bicycles",
  },
  {
    name: "Model X",
    image: img,
    price: "$450.00",
    category: "Bicycles",
  },
  {
    name: "Model Y",
    image: img2,
    price: "$550.00",
    category: "Bicycles",
  },
  {
    name: "Model Z",
    image: img3,
    price: "$650.00",
    category: "Bicycles",
  },
];

const App = () => {
  return (
    <div className="font-sans">


      <section className=" h-[100vh] relative flex text-white">

        <img
          src={img}
          alt="Bike"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <header className=" absolute bg-black w-full text-white py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10" />
            <nav className="absolute ml-[30%] z-50 space-x-6  ">
              <a href="#" className="hover:text-yellow-500 uppercase font-bold">Home</a>
              <a href="#" className="hover:text-yellow-500 uppercase font-bold">Bicycles</a>
              <a href="#" className="hover:text-yellow-500 uppercase font-bold">Accessories</a>
              <a href="#" className="hover:text-yellow-500 uppercase font-bold">About Us</a>
              <a href="#" className="hover:text-yellow-500 uppercase font-bold">Contact</a>
            </nav>
          </div>
          <div className="z-50">
            <span className="text-lg font-bold">$0.00</span>
            <span className="relative ml-2 font-bold">
              <ShoppingCartIcon/>
              <span className="absolute -top-3 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                5
              </span>
            </span>
          </div>
          <div className="absolute w-[50%] h-full  right-0 bg-[#B13C3C]">

          </div>
        </header>
        <div className="w-1/2 bg-black flex flex-col justify-center p-10 md:p-20">
          <h2 className="absolute top-20 left-30 text-2xl md:text-4xl font-bold  font-[Roboto]">Newly Launched</h2>
          <h1 className="text-white text-4xl md:text-8xl font-bold mt-[20%]">Kryo X26 MTB</h1>
          <p className="text-white mt-11 font-bold text-xl">Specifications:</p>
          <ul className="text-white mt-2 space-y-1">
            <ul className="text-white" >
              <li className="font-semibold text-lg flex items-center text-white">
                <img src={point} className="w-10 h-10 mr-2" />
                Lightweight 18" Frame
              </li>
              <li className="font-semibold text-lg flex items-center text-white">
                <img src={point} className="w-10 h-10 mr-2" />
                Steel Suspension Fork
              </li>
              <li className="font-semibold text-lg flex items-center text-white">
                <img src={point} className="w-10 h-10 mr-2" />
                Steel Hardtail Frame
              </li>
            </ul>

          </ul>
          <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded w-[30%] hover:bg-gray-200">
            Buy Now
          </button>
        </div>

        <div className="w-1/2 bg-red-500 flex justify-center items-center">

        </div>
      </section>

      <section className="py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20">
          {bikeData.map((bike, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow-md"
            >
              <img
                src={bike.image}
                alt={`Bike ${bike.name}`}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="font-bold text-lg">Kryo X26 MTB – {bike.name}</h3>
              <p className="text-gray-500 text-sm">{bike.category}</p>

              <div className="mt-2 flex text-gray-400 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-2 text-lg font-semibold">{bike.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
