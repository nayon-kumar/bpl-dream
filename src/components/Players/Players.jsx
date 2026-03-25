import React, { use, useState } from "react";
import AvailablePlayers from "../Players/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../Players/SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise }) => {
  const data = use(playerPromise);
  const [available, setAvilable] = useState("available");
  return (
    <div className="container mx-auto mt-15">
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between">
        <div>
          {available === "available" ? (
            <h4 className="font-bold text-2xl">Available Players</h4>
          ) : (
            <h4 className="font-bold text-2xl">Selected Player (4/6)</h4>
          )}
        </div>
        <div className="flex">
          <button
            onClick={() => setAvilable("available")}
            className={`btn rounded-xl rounded-r-none ${available === "available" ? "btn-primary" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setAvilable("selected")}
            className={`btn rounded-xl rounded-l-none ${available === "selected" ? "btn-primary" : ""}`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {available === "available" ? (
        <AvailablePlayers data={data} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
