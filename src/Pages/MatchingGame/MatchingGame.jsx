import { React, useState, useEffect } from "react";
import "./MatchingGame.css";
import starScore from "../../assets/starScore.png";
import buttonReplay from "../../assets/buttons/buttonReplay.webp";

// import Images
import acampar from "../../assets/imagesMatchGame/acampar.webp";
import bailar from "../../assets/imagesMatchGame/bailar.webp";
import beber from "../../assets/imagesMatchGame/beber.webp";
import buscar from "../../assets/imagesMatchGame/buscar.webp";
import caminar from "../../assets/imagesMatchGame/caminar.webp";
import cantar from "../../assets/imagesMatchGame/cantar.webp";
import cocinar from "../../assets/imagesMatchGame/cocinar.webp";
import comer from "../../assets/imagesMatchGame/comer.webp";
import comprar from "../../assets/imagesMatchGame/comprar.webp";
import correr from "../../assets/imagesMatchGame/correr.webp";
import descansar from "../../assets/imagesMatchGame/descansar.webp";
import dibujar from "../../assets/imagesMatchGame/dibujar.webp";
import dormir from "../../assets/imagesMatchGame/dormir.webp";
import escuchar from "../../assets/imagesMatchGame/escuchar.webp";
import esquiar from "../../assets/imagesMatchGame/esquiar.webp";
import estudiar from "../../assets/imagesMatchGame/estudiar.webp";
import hablar from "../../assets/imagesMatchGame/hablar.webp";
import jugar from "../../assets/imagesMatchGame/jugar.webp";
import leer from "../../assets/imagesMatchGame/leer.webp";
import limpiar from "../../assets/imagesMatchGame/limpiar.webp";
import mirar from "../../assets/imagesMatchGame/mirar.webp";
import nadar from "../../assets/imagesMatchGame/nadar.webp";
import patinar from "../../assets/imagesMatchGame/patinar.webp";
import reir from "../../assets/imagesMatchGame/reir.webp";
import salir from "../../assets/imagesMatchGame/salir.webp";
import saltar from "../../assets/imagesMatchGame/saltar.webp";
import tocar from "../../assets/imagesMatchGame/tocar.webp";
import trabajar from "../../assets/imagesMatchGame/trabajar.webp";
import viajar from "../../assets/imagesMatchGame/viajar.webp";
import pintar from "../../assets/imagesMatchGame/pintar.webp";

const MatchingGame = (name) => {
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState("");
  const [selectedWords, setSelectedWords] = useState("");

  const palabras = [
    { name: "cantar", image: cantar },
    { name: "bailar", image: bailar },
    { name: "cocinar", image: cocinar },
    { name: "jugar", image: jugar },
    { name: "caminar", image: caminar },
    { name: "pintar", image: pintar },
    { name: "mirar", image: mirar },
    { name: "tocar", image: tocar },
    { name: "correr", image: correr },
    { name: "buscar", image: buscar },
    { name: "beber", image: beber },
    { name: "comer", image: comer },
    { name: "viajar", image: viajar },
    { name: "hablar", image: hablar },
    { name: "reir", image: reir },
    { name: "salir", image: salir },
    { name: "leer", image: leer },
    { name: "limpiar", image: limpiar },
    { name: "saltar", image: saltar },
    { name: "descansar", image: descansar },
    // {name: "acampar",
    // image: acampar},
    // {name: "dibujar",
    // image: dibujar},
    // {name: "estudiar",
    // image: estudiar},
    // {name: "esquiar",
    // image: esquiar},
    // {name: "patinar",
    // image: patinar},
    // {name: "comprar",
    // image: comprar},
    // {name: "nadar",
    // image: nadar},
    // {name: "dormir",
    // image: dormir},
    // {name: "trabajar",
    // image: trabajar},
    // {name: "escuchar",
    // image: escuchar},
  ];

  const [randomImages, setRandomImages] = useState(palabras.slice(0, 12));
  const [randomWords, setRandomWords] = useState(palabras);

  useEffect(() => {
    if (
      selectedCards === selectedWords &&
      selectedCards.length > 0 &&
      selectedWords.length > 0
    ) {
      setScore(score + 1);
      setSelectedCards("");
      setSelectedWords("");
    } else if (selectedCards.length > 0 && selectedWords.length > 0) {
      setSelectedCards("");
      setSelectedWords("");
    }
  }, [selectedCards, selectedWords]);

  const handleReload = () => {
    setRandomImages(palabras.sort(() => Math.random() - 0.5).slice(0, 12));
    setRandomWords(palabras.sort(() => Math.random() - 0.5));
    setScore(0);
    setSelectedCards("");
    setSelectedWords("");
  };

  return (
    <main className="matchingGameContainer">
      <div id="score">
        <button className="buttonReplay" onClick={handleReload}>
          <img alt="replay button" src={buttonReplay} />
        </button>
        <img src={starScore} className="starScore" />
        <h2>SCORE:</h2>
        <p className="counterScore">{score}</p>
      </div>

      <div className="containerCardsMatch">
        <div className="containerCardsImages">
          {randomImages.map((element) => (
            <button
              className={
                selectedCards === element.name
                  ? "cardMatch selectedCard"
                  : "cardMatch"
              }
              key={element.image}
              onClick={() => setSelectedCards(element.name)}
            >
              <img src={element.image} className="imageCardMatch" />
            </button>
          ))}
        </div>
        <div className="containerCardsWords">
          {randomWords.map((element) => (
            <button
              className={
                selectedWords === element.name
                  ? "cardWord selectedWord"
                  : "cardWord"
              }
              key={element.name}
              onClick={() => setSelectedWords(element.name)}
            >
              {element.name}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MatchingGame;
