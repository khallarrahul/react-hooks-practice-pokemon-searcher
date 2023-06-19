import React, { useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_TICKETMASTER_API_KEY;
    if (!apiKey) {
      console.error(
        "API key not found. Make sure you have set the REACT_APP_TICKETMASTER_API_KEY environment variable."
      );
      return;
    }

    fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
