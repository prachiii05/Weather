import React, { useEffect, useState } from "react";
import "./style.css";
import { Search } from "./api";

const Temp = () => {
  const [city,setCity] = useState("Gwalior");
  
  const handleChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  }
  useEffect(() => {
    Search(city).then((res) => {
      console.log(res);
     
    });
  }, []);
  function SearchButton(city){
    Search(city);
  }
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            onChange={handleChange}
          />
          <button className="searchButton" type="button" onClick={SearchButton}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Temp;
