import React from "react";
import "./TripStyles.css";
import trip1 from "../../assets/Indonesia.jpg";
import trip2 from "../../assets/Malaysia.jpg";
import trip3 from "../../assets/3.jpg";
import TripData from "./TripData";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip-card">
        <TripData
          img={trip1}
          heading="Trip in indonesia"
          text="Indonesia seems to have been a travel destination for centuries. Some panels in Borobudur bas-reliefs depicted drink vendors, warungs (small restaurants), tavern or lodgings where people were drinking and dancing. The historical record of travel in Indonesia can be found since the 14th century."
        />
        <TripData
          img={trip2}
          heading="Trip in Malaysia"
          text="Tourism Malaysia stated 'Besides mass tourists, we are also trying to focus on niche tourism products such as sports including motoring and others, golfing, bird watching, medical and wellness as well as shopping.' Shopping brings in the highest revenue share at 30 per cent of total tourism revenue in 2015."
        />
        <TripData
          heading="Trip in France"
          img={trip3}
          text="France was visited by 89 million foreign tourists in 2019; however, with 137 million foreign overnight stays, it is the fourth most visited country in the world.France has 45 sites inscribed in the UNESCO's World Heritage List and features cities or sites of high cultural interest (Paris being the foremost, but also Loire Valley, Toulouse, Strasbourg, Bordeaux, Paris, Lyon and others), beaches and seaside resorts"
        />
      </div>
    </div>
  );
};

export default Trip;
