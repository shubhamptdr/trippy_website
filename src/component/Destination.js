import React from "react";
import DesitinationData from "./DesitinationData";
import "./Destination.css";
import mountain1 from "../assests/1.jpg";
import mountain2 from "../assests/2.jpg";
import mountain3 from "../assests/3.jpg";
import mountain4 from "../assests/4.jpg";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p> Tours give you the opportunity to see a lot, within a time frame </p>
      <DesitinationData
        className="first-dest"
        heading="Taal Volcano, Batangas"
        text="The Taal Volcano is a complex volcano located on the island of Luzon
            in the Philippines, specifically in the province of Batangas. It is
            one of the most active volcanoes in the Philippines and is known for
            its picturesque crater lake, which is one of the main tourist
            attractions in the area. Taal Volcano is classified as a complex
            volcano because it is made up of multiple stratovolcanoes and
            craters. The main crater of the volcano contains a lake, which is
            often referred to as the Taal Lake. The lake is about 1.9
            kilometers in diameter and is surrounded by steep walls, which rise
            up to 400 meters above the lake."
        img1={mountain1}
        img2={mountain2}
      />
      <DesitinationData
        className="first-dest-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldul is a mountain located in the province of Batangas in the Philippines. It is part of the Southern Tagalog mountain range and has an elevation of approximately 670 meters above sea level.

        The mountain is a popular destination for hikers and outdoor enthusiasts because of its relatively easy trails and scenic views of the surrounding landscape. The hike to the summit takes around two to three hours and passes through lush forests, river crossings, and steep ascents.
        
        At the summit, hikers are rewarded with breathtaking panoramic views of the Batangas coastline and nearby islands. The mountain is also known for its waterfalls and natural swimming pools, which are a refreshing respite from the heat of the hike."
        img1={mountain3}
        img2={mountain4}
      />
    </div>
  );
}

export default Destination;
