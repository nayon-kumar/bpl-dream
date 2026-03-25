import { Suspense } from "react";
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
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense>
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
