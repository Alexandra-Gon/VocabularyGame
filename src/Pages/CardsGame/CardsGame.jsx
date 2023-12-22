import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Howl } from "howler";
import "./CardsGame.css";
import Card from "../../Components/Card/Card";
import buttonBack from "../../assets/buttons/buttonback.webp";
import soundGame from "../../assets/sounds/soundGame.mp3";
// Images: Deportes
import baloncestoImage from "../../assets/deportesImages/baloncesto.webp";
import atletismoImage from "../../assets/deportesImages/atletismo.webp";
import ciclismoImage from "../../assets/deportesImages/ciclismo.webp";
import esquiarImage from "../../assets/deportesImages/esquiar.webp";
import levantarPesasImage from "../../assets/deportesImages/levantarPesas.webp";
import natacionImage from "../../assets/deportesImages/natacion.webp";
import patinarImage from "../../assets/deportesImages/patinar.webp";
// Images: Profesiones
import abogadoImage from "../../assets/profesionesImages/abogado.webp";
import astronautaImage from "../../assets/profesionesImages/astronauta.webp";
import bomberoImage from "../../assets/profesionesImages/bombero.webp";
import cientificaImage from "../../assets/profesionesImages/cientifica.webp";
import cocineroImage from "../../assets/profesionesImages/cocinero.webp";
import dentistaImage from "../../assets/profesionesImages/dentista.webp";
import policiaImage from "../../assets/profesionesImages/policia.webp";
// Images: Comida
import carneImage from "../../assets/comidaImages/carne.webp";
import hamburguesaImage from "../../assets/comidaImages/hamburguesa.webp";
import panImage from "../../assets/comidaImages/pan.webp";
import pescadoImage from "../../assets/comidaImages/pescado.webp";
import polloImage from "../../assets/comidaImages/pollo.webp";
import quesoImage from "../../assets/comidaImages/queso.webp";
import vegetalesImage from "../../assets/comidaImages/vegetales.webp";

const CardsGame = () => {
  const { parameter } = useParams();

  console.log(parameter)
  
  useEffect (()=>{
    const soundPlay = new Howl({ src: [soundGame] });
    soundPlay.play()
  }, []);


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
    vegetalesImage,
  ];

  return (
    <div className="game">
      <div className="gameBarContainer">
        <Link to="/scenarios">
          <img src={buttonBack} className="buttonBack" />
        </Link>
        <div className="gameBar">
          <h1 className="title">Entrenemos tu vocabulario</h1>

          <h2
            className={
              parameter === "deportes"
                ? "colorLinkDeportes scenariosTitle"
                : parameter === "profesiones"
                ? "colorLinkProfesiones scenariosTitle"
                : "colorLinkComida scenariosTitle"
            }
          >
            {parameter}
          </h2>
        </div>
      </div>
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

export default CardsGame;
