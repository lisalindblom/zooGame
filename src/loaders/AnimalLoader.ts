import { IAnimals } from "../models/IAnimal";
import zebra from "../assets/Zebra-coloured.svg";
import rhino from "../assets/rhino.svg";
import goose from "../assets/Gans-coloured.svg";
import pig from "../assets/pig.svg";
import dino from "../assets/dino.svg";
import dog from "../assets/publicdomainq-dog_Saint_Bernard.svg";
import fish from "../assets/sklenicefish.svg";

export interface Loader {
  animals: IAnimals[];
}

let animals: IAnimals[] = [];

export const animalLoader = async () => {
  if (localStorage.getItem("zooGame")) {
    animals = JSON.parse(localStorage.getItem("zooGame") || "[]");
  } else {
    animals = [
      {
        id: 1,
        name: "Zebran",
        description:
          "Zebrans favorimat är löv och behöver äta en gång i timmen.",
        imageUrl: zebra,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 3600000,
        isClean: false,
        needWater: true,
      },
      {
        id: 3,
        name: "Gåsen",
        description:
          "Gåsen äter fisk helst helatiden, men mata inte gåsen oftare än var tionde minut.",
        imageUrl: goose,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 600000,
        isClean: false,
        needWater: true,
      },
      {
        id: 2,
        name: "Noshörningen",
        description:
          "Noshörningen älskar grenar, både att äta och leka med. Matas en gång i halvtimmen.",
        imageUrl: rhino,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 1800000,
        isClean: false,
        needWater: true,
      },

      {
        id: 6,
        name: "Bob",
        description:
          "Bob älskar att leka och bli klappad, hon ska äta varannan timme",
        imageUrl: dog,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 7200000,
        isClean: false,
        needWater: true,
      },
      {
        id: 4,
        name: "Grisen",
        description:
          "Grisen älskar att rulla sig i lera och vill äta foder var tionde minut",
        imageUrl: pig,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 600000,
        isClean: false,
        needWater: true,
      },
      {
        id: 5,
        name: "Nemo",
        description: "Nemo simmar hela dagen och äter var tredje timme",
        imageUrl: fish,
        isFed: false,
        lastFed: "",
        timeBetweenFeeding: 10800000,
        isClean: false,
        needWater: true,
      },
    ];
    localStorage.setItem("zooGame", JSON.stringify(animals));
  }

  const data: Loader = {
    animals: animals,
  };

  return data;
};
