import { Link, useLoaderData } from "react-router-dom";
import "../scss/Animals.scss";
import { Loader } from "../loaders/AnimalLoader";
import defaultImage from "../assets/zoo-clipart.svg";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Animals = () => {
  const { animals } = useLoaderData() as Loader;

  const showAnimals = animals.map((a, index) => (
    <Link key={index} to={a.id.toString()} className="animalContainer">
      <p id="isFedSymbol" className={a.isFed == true ? " " : "notFed"}></p>
      <img
        className="animalImg"
        src={a.imageUrl}
        alt="Bild på djur"
        onError={(e) => (e.currentTarget.src = defaultImage)}
      />
      <div className="animalDescription">
        <h2>{a.name}</h2>
        <p>{a.description}</p>
      </div>
    </Link>
  ));

  return (
    <>
      <div id="topOfPage"></div>
      <div className="container">{showAnimals}</div>
      <a href="#topOfPage" className="arrowContainer">
        <FontAwesomeIcon id="arrow" icon={faCircleUp} />
      </a>
    </>
  );
};
