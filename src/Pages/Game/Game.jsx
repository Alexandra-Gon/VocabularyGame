import React from "react";
import "./Game.css";
import { Link, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
// Images Deportes
import baloncestoImage from "../../assets/deportesImages/baloncesto.png";
import atletismoImage from "../../assets/deportesImages/atletismo.png";
import ciclismoImage from "../../assets/deportesImages/ciclismo.png";
import esquiarImage from "../../assets/deportesImages/esquiar.png";
import levantarPesasImage from "../../assets/deportesImages/levantarPesas.png";
import natacionImage from "../../assets/deportesImages/natacion.png";
import patinarImage from "../../assets/deportesImages/patinar.png";
// Images Profesiones
import abogadoImage from "../../assets/profesionesImages/abogado.png";
import astronautaImage from "../../assets/profesionesImages/astronauta.png";
import bomberoImage from "../../assets/profesionesImages/bombero.png";
import cientificaImage from "../../assets/profesionesImages/cientifica.png";
import cocineroImage from "../../assets/profesionesImages/cocinero.png";
import dentistaImage from "../../assets/profesionesImages/dentista.png";
import policiaImage from "../../assets/profesionesImages/policia.png";
// Images Comida 
import carneImage from "../../assets/comidaImages/carne.png";
import hamburguesaImage from "../../assets/comidaImages/hamburguesa.png";
import panImage from "../../assets/comidaImages/pan.png";
import pescadoImage from "../../assets/comidaImages/pescado.png";
import polloImage from "../../assets/comidaImages/pollo.png";
import quesoImage from "../../assets/comidaImages/queso.png";
import vegetalesImage from "../../assets/comidaImages/vegetales.png";


const Game = () => {
  const { parameter } = useParams();

  const deportesImages = [
    baloncestoImage,
    atletismoImage,
    ciclismoImage,
    esquiarImage,
    levantarPesasImage,
    natacionImage,
    patinarImage,
  ];
  const profesionesImages = [
    abogadoImage,
    astronautaImage,
    bomberoImage,
    cientificaImage,
    cocineroImage,
    dentistaImage,
    policiaImage,
  ];
  const comidaImages = [
    carneImage,
    hamburguesaImage,
    panImage,
    pescadoImage,
    polloImage,
    quesoImage,
    vegetalesImage
  ]

  return (
    <div className="game">
      <Link to="/scenarios">Regresar</Link>
      <h1>Entrenemos tu vocabulario</h1>
      <h2>{parameter}</h2>

      <div className="cardContainer">
        {parameter === `deportes`
          ? deportesImages.map((element, i) => {
              return <Card key={i} image={element} />;
            })
          : parameter === `profesiones`
          ? profesionesImages.map((element, i) => {
              return <Card key={i} image={element} />;
            })
          : comidaImages.map((element, i) => {
              return <Card key={i} image={element} />;
            })}
      </div>
    </div>
  );
};

export default Game;
