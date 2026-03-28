import React from "react";
import SelectedCard from "../../../ui/Card/SelectedCard";

const SelectedPlayers = ({
  selectedPlayer,
  setSelectedPlayer,
  price,
  setPrice,
}) => {
  return (
    <div className="mt-10 flex flex-col gap-4 px-3">
      {selectedPlayer.length === 0 ? (
        <div className="text-center">
          <h3 className="text-xl text-gray-500">No player selected yet</h3>
          <p className="text-gray-500 mt-2">
            Go to available tab to select player
          </p>
        </div>
      ) : (
        selectedPlayer.map((player, index) => (
          <SelectedCard
            key={index}
            player={player}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            price={price}
            setPrice={setPrice}
          />
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
