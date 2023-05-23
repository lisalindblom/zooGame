import { Navbar } from "../components/Navbar";
import zooSvg from "../assets/zoo-clipart.svg";
import "../scss/LandingPage.scss";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/AnimalLoader";
import { AnimalTest } from "../components/AnimalTest";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  const { animals } = useLoaderData() as Loader;

  const showAnimals = animals.map((a, index) => (
    <Link
      key={index + "start"}
      to={"/animals/" + a.id.toString()}
      className="animalOnField"
    >
      <p className={a.isFed == true ? " " : "notFedStart"}>
        <img
          id={"animal" + a.id}
          className="animalImg"
          src={a.imageUrl}
          alt="Bild på djur"
        />
      </p>
    </Link>
  ));
  return (
    <>
      <Navbar></Navbar>
      <div className="startContainer">
        <div className="startContainer-text">
          <p>Välkommen till djurparken!</p>
          <p>
            Här kan du hjälpa oss att ta hand om djuren. Alla djur behöver nytt
            vatten en gång i timmen och deras hängn behöver städas varje dag.
          </p>
          <p>Klicka på ett djur för att lära dig mer om dom.</p>
        </div>
        <div className="field">{showAnimals}</div>
      </div>
      <Footer></Footer>
    </>
  );
};
