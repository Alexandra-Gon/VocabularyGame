import React from "react";
import "./MatchingGame.css";
import CardMatch from "../../Components/CardMatch/CardMatch";

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

export const MatchingGame = (name) => {
  const palabras = [
    {name: "cantar",
    image: cantar},
    {name: "bailar",
    image: bailar},
    {name: "cocinar",
    image: cocinar},
    {name: "jugar",
    image: jugar},
    {name: "caminar",
    image: caminar},
    {name: "pintar",
    image: pintar},
    {name: "mirar",
    image: mirar},
    {name: "tocar",
    image: tocar},
    {name: "correr",
    image: correr},
    {name: "buscar",
    image: buscar},
    {name: "beber",
    image: beber},
    {name: "comer",
    image: comer},
    {name: "viajar",
    image: viajar},
    {name: "hablar",
    image: hablar},
    {name: "reir",
    image: reir},
    {name: "salir",
    image: salir},
    {name: "leer",
    image: leer},
    {name: "limpiar",
    image: limpiar},
    {name: "saltar",
    image: saltar},
    {name: "descansar",
    image: descansar},
    {name: "acampar",
    image: acampar},
    {name: "dibujar",
    image: dibujar},
    {name: "estudiar",
    image: estudiar},
    {name: "esquiar",
    image: esquiar},
    {name: "patinar",
    image: patinar},
    {name: "comprar",
    image: comprar},
    {name: "nadar",
    image: nadar},
    {name: "dormir",
    image: dormir},
    {name: "trabajar",
    image: trabajar},
    {name: "escuchar",
    image: escuchar},

  ];

  return (
    <div className="container">
      <div>
      {palabras.map((element, i) => {
        return <CardMatch key={i} nameImage={element.image} />;
      })}
      </div>
      <div>
      {palabras.map((element, i) => {
        return <h2 key={i} >{element.name}</h2>
      })}
        
      </div>
    </div>
  );
};

export default MatchingGame;