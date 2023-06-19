import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showImage, setShowImage] = useState(true);

  function handleClick() {
    return setShowImage((showImage) => !showImage);
  }
  return (
    <Card>
      <div className="pokemon-card">
        <div className="image" onClick={handleClick}>
          <img src={showImage ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
