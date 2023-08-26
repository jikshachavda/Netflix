import React, { useEffect, useState } from "react";
import MovieNetflixCard from "./MovieNetflixCard";
import ShowNetflixCard from "./ShowNetflixCard";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [myData, setMyData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "768b8deb9cmshfae4c26be918e51p1d8bbajsnc3af72ae0b39",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://netflix-data.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20",
        options
      );
      const response = await data.json();
      console.log(response.titles);
      setMyData(response.titles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="netflix-container">
        <h1>Movies</h1>
        <div className="container">
          {myData.map((curElem) => {
            return (
              <MovieNetflixCard key={curElem.summary.id} actualData={curElem} />
            );
          })}
        </div>
      </div>
      <div className="netflix-container">
        <h1>Show</h1>
        <div className="container">
          {myData.map((curElem) => {
            return (
              <ShowNetflixCard key={curElem.summary.id} actualData={curElem} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
