import React, { useEffect, useState } from "react";
import "../App.css";
import Map from "./Map";
function GetLocation() {
  const [address, setAddress] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const coordinates = [lat, lng];

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_QanNF0ptFrXiAYhTHeRYkaqy8JWpy`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddress(data);
        console.log(data);

        setLat(data.location.lat);
        setLng(data.location.lng);
      });
  }, []);

  return (
    <div className="App">
     

   
      <Map coordinates={coordinates} />
    </div>
  );
}

export default GetLocation;
