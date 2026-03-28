import { Suspense, useMemo, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/Players/Players";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

const fetchPlayer = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromise = useMemo(() => fetchPlayer(), []);
  const [price, setPrice] = useState(100);
  return (
    <>
      <Navbar price={price} />
      <Banner price={price} setPrice={setPrice} />
      <Suspense>
        <Players
          playerPromise={playerPromise}
          price={price}
          setPrice={setPrice}
        />
      </Suspense>
      <Footer />
      {/* React toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
