import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer }) => {
  const deleteSelectedPlayer = (dPlayer) => {
    setSelectedPlayer(
      selectedPlayer.filter((sPlayer) => sPlayer.name !== dPlayer.name),
    );
  };

  console.log(selectedPlayer);
  return (
    <div className="mt-10 flex flex-col gap-4">
      {selectedPlayer.map((player, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between border-2 border-gray-300 p-5 rounded-xl"
          >
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="h-20 w-20 rounded-xl"
                  src={player.profile_image}
                  alt={player.name}
                />
              </div>
              <div>
                <h3 className="font-bold">{player.name}</h3>
                <p className="text-[#131313]/60">{player.player_type}</p>
              </div>
            </div>
            <div
              onClick={() => deleteSelectedPlayer(player)}
              className="cursor-pointer"
            >
              <RiDeleteBin6Line size={25} className="text-red-600" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
