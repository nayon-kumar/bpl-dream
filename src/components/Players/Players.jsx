import React, { useState } from "react";

const Players = () => {
  const [available, setAvilable] = useState("available");
  return (
    <div className="container mx-auto mt-15">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-2xl">Available Players</h4>
        </div>
        <div className="flex">
          <button
            onClick={() => setAvilable("available")}
            className={`btn rounded-r-none ${available === "available" ? "btn-primary" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setAvilable("selected")}
            className={`btn rounded-l-none ${available === "selected" ? "btn-primary" : ""}`}
          >
            Selected (0)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
