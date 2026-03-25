import React from "react";
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const Card = ({ player }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="w-full" src={player.profile_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {player.name}
          </h2>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <CiFlag1 size={25} />
                <p className="text-[#131313]/50">{player.country}</p>
              </div>
              <div>
                <p className="border-2 px-2 py-1 border-gray-200 bg-gray-100 rounded-sm">
                  {player.player_type}
                </p>
              </div>
            </div>
            <hr className="my-4 text-gray-300" />
            <div>
              <p className="font-bold mb-4">Rating</p>
              <div className="flex items-center justify-between">
                <p className="font-bold">{player.batting_style}</p>
                <p className="text-right">{player.bowling_style}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">{player.price}</p>
            <button className="btn hover:btn-primary">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
