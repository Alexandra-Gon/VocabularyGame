import { React, useState } from "react";
import "./MatchingGame.css";
import CardMatch from "../../Components/CardMatchingGame/CardMatchImage/CardMatch";
import CardWord from "../../Components/CardMatchingGame/CardMatchWord/CardWord";
import starScore from "../../assets/starScore.png";

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
  // const [match, setMatch] = useState();

  

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


  const handleClick = (e) => {
    let nameCard = "";
    palabras.map((element, i) => {
      nameCard += palabras[i].element.name;
    });
  };

  const randomImages = palabras.sort(() => Math.random() - 0.5).slice(0, 12);
  const randomWords = palabras.sort(() => Math.random() - 0.5).slice(0, 20);

  // const lectorCambio = () => {
  //   console.log("hola")
  //   palabras.name === palabras.image ? setMatch + 10
  //   : setMatch + 2;
  // }

  // let prueba = 0;
  // const handleChangeScore = (e) => {
  //   let comparar = 0;
  //   palabras.map((element) => {
  //     if (<CardMatch nameImage={element.image}/> == <CardWord name={element.name}/>) {
  //       return ("Comparar", comparar + 1);
  //     } else {
  //       return "No es similar";
  //     }
  //   });

  //   console.log("prueba", prueba + 1)
  // };

  

  return (
    <main>
      <div id="score">
        <img src={starScore} className="starScore" />
        <h2>SCORE:</h2>
        <p className="counterScore">0</p>
      </div>

      <div className="containerCardsMatch">
        <div className="containerCardsImages">
          <button 
          onClick={handleClick}
          >
            {randomImages.map((element) => (
              <CardMatch key={element.image} nameImage={element.image} />
            ))}
          </button>
        </div>

        <div className="containerCardsWords">
          <button 
          // onClick={handleClick}
          >
            {randomWords.map((element) => (
              <CardWord key={element.name} name={element.name} />
            ))}
          </button>
        </div>
      </div>
    </main>
  );
};

export default MatchingGame;
