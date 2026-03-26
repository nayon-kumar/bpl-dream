import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayer,
  setSelectedPlayer,
  price,
  setPrice,
}) => {
  const deleteSelectedPlayer = (dPlayer) => {
    toast.success(`${dPlayer.name} deleted!`);
    const newPrice = price + parseInt(dPlayer.price);
    setPrice(newPrice);
    setSelectedPlayer(
      selectedPlayer.filter((sPlayer) => sPlayer.name !== dPlayer.name),
    );
  };

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
