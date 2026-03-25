import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [price, setPrice] = useState(120);
  return (
    <>
      <Navbar price={price} />
      <Banner />
      <Suspense>
        <Players
          playerPromise={playerPromise}
          price={price}
          setPrice={setPrice}
        />
      </Suspense>
    </>
  );
}

export default App;
