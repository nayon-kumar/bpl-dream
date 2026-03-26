import React from "react";
import Card from "../../../ui/Card/Card";

const AvailablePlayers = ({
  data,
  price,
  setPrice,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
      {data.map((player, index) => (
        <Card
          key={index}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          player={player}
          price={price}
          setPrice={setPrice}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
