import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import list from '../../public/list.json'

function Comic() {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Welcome to the Marvel Universe!{" "}
            <span className="text-red-600">Excelsior! :)</span>
          </h1>
          <p className="mt-12">
            Dive into the thrilling adventures of your favorite superheroes! From
            the valiant efforts of Iron Man to the incredible strength of the Hulk,
            Marvel Comics brings you epic tales filled with action, drama, and 
            unforgettable characters. Explore the realms of heroism and villainy,
            where every page is packed with excitement. Join us in celebrating the 
            legacy of Marvel as we embark on a journey through extraordinary 
            narratives that inspire courage and hope!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        
        {/* Centered Back Button */}
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Comic;
