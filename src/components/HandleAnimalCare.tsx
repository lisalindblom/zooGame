import { faLeaf, faDroplet, faPoo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
import { IAnimals } from "../models/IAnimal";
import { Loader } from "../loaders/AnimalLoader";

interface IAnimalProps {
  clicked: IAnimals;
}

export const HandleAnimalCare = (animal: IAnimalProps) => {
  const { animals } = useLoaderData() as Loader;
  const handleWater = () => {
    console.log("vatten");
    const currentTime = Date.now();

    if (animal.clicked.needWater) {
      animal.clicked.needWater = false;
      animal.clicked.lastWaterRefill = currentTime;
      console.log(animal.clicked.needWater);
      localStorage.setItem("zooGame", JSON.stringify(animals));
    } else {
      console.log("Du har redan fyllt på vattnet");
    }
  };

  return (
    <>
      <button onClick={handleWater}>
        <FontAwesomeIcon icon={faDroplet} />
      </button>
    </>
  );
};
