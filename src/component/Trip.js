import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import trip1 from "../assests/5.jpg";
import trip2 from "../assests/8.jpg";
import trip3 from "../assests/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Indonesia"
          text="Indonesia is a country located in Southeast Asia and Oceania. It is the world's largest archipelago, consisting of over 17,000 islands, and has a population of over 270 million people, making it the world's fourth-most populous country."
        />
        <TripData
          image={trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a country located in Southeast Asia. It consists of two main regions: Peninsular Malaysia and East Malaysia, which is located on the island of Borneo. The country has a population of over 32 million people and its official language is Malay, although English is widely spoken and used for business and education."
        />
        <TripData
          image={trip3}
          heading="Trip in France"
          text="France is a country located in Western Europe. It is the largest country in the European Union and has a population of over 66 million people. The official language is French and the currency is the Euro.
          It is home to many iconic landmarks such as the Eiffel Tower, the Louvre Museum, the Palace of Versailles, and the Notre-Dame Cathedral."
        />
      </div>
    </div>
  );
}

export default Trip;
