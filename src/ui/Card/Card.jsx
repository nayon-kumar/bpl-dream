import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import { toast } from "react-toastify";

const Card = ({
  player,
  price,
  setPrice,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const isSelected = selectedPlayer.some((p) => p.name === player.name);

  const handleClick = (e) => {
    e.preventDefault();
    const playerPrice = parseInt(player.price);
    if (price - playerPrice >= 0) {
      toast.success(`${player.name} selected!`);
      setPrice(price - playerPrice);
      setSelectedPlayer([...selectedPlayer, player]);
    } else {
      toast.error("Your balance is low!");
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-md hover:shadow-xl">
        <figure>
          <img
            className="w-full h-80 md:h-90"
            src={player.profile_image}
            alt={player.name}
          />
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
              <div className="mb-4 flex items-center justify-between">
                <p className="font-bold">Rating</p>
                <p className="text-right">{player.rating}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">{player.batting_style}</p>
                <p className="text-right">{player.bowling_style}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold">{player.price} Cr</p>
            <button
              type="button"
              onClick={handleClick}
              disabled={isSelected}
              className="btn btn-soft btn-primary"
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
