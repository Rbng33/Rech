import React from "react";
import Navbar from "../Navbar";
import Searchbar from "./Searchbar";
import CrecheSlider1 from "./CrecheSlider";



const Search = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" max-w-[1300px] mx-auto">
        <Searchbar />
     
        <CrecheSlider1 />
        <CrecheSlider1 />
      
        
      </div>
    </>
  );
};

export default Search;
