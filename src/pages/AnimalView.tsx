import { useLoaderData, useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { Loader } from "../loaders/AnimalLoader";
import "../scss/AnimalView.scss";
import { useState } from "react";
import { IAnimals } from "../models/IAnimal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faLeaf, faPoo } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
import bucket from "../assets/bucket.png";

export const AnimalView = () => {
  const params = useParams();
  const { animals } = useLoaderData() as Loader;
  const current = animals.find((animal) => animal.id.toString() === params.id);

  if (current === undefined) {
    return (
      <>
        <h2>Djuret du har klickat på finns inte</h2>
      </>
    );
  } else {
    const [fed, setFed] = useState("");
    const [nextFeed, setNextFeed] = useState("");
    const [feedingMessage, setFeedingMessage] = useState(
      current.isFed == true ? "Jag är mätt" : "Jag är hungrig!"
    );

    const handleFeedingClick = () => {
      const currentTime = Date.now();
      const lastFeeding = current.lastFedTime || 0;
      const calc = currentTime - lastFeeding;
      const timeBetweenFeeding = current.timeBetweenFeeding;

      if (current.isFed == false) {
        feedAnimal();
      }
      if (current.isFed && calc >= timeBetweenFeeding) {
        feedAnimal();
      } else {
        const feedAgain = lastFeeding + timeBetweenFeeding;
        const timestamp = new Intl.DateTimeFormat("sv-EU", {
          hour: "numeric",
          minute: "numeric",
        }).format(feedAgain);
        setNextFeed(timestamp);
        noFeeding();
      }
    };

    const feedAnimal = () => {
      current.isFed = true;
      localStorage.setItem("zooGame", JSON.stringify(animals));
      setFeedingMessage("Tack för maten");
      getFeedingTime(current);
    };

    const getFeedingTime = (animal: IAnimals) => {
      const time = Date.now();
      const timestamp = new Intl.DateTimeFormat("sv-EU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(time);

      setFed(timestamp);
      animal.lastFed = timestamp;
      animal.lastFedTime = time;
      localStorage.setItem("zooGame", JSON.stringify(animals));
    };

    const handleWater = () => {
      console.log("vatten");
      const currentTime = Date.now();
    };

    const [cleaningMessage, setCleaningMessage] = useState("");
    const handleCleaning = () => {
      const currentTime = Date.now();
      const timeBetweenCleaning = 86400000;
      const lastCleaned = current.lastCleaned || 0;
      const calc = currentTime - lastCleaned;

      if (current.isClean === false) {
        current.isClean = true;
        current.lastCleaned = currentTime;
        localStorage.setItem("zooGame", JSON.stringify(animals));
        setCleaningMessage("Nu är det rent!");
      }
      if (calc > timeBetweenCleaning) {
        current.lastCleaned = currentTime;
        localStorage.setItem("zooGame", JSON.stringify(animals));
        console.log("test");
      } else {
        setCleaningMessage("Du har redan städat " + current.name + " idag");
      }
      console.log("cleaningMessage", cleaningMessage);
    };

    const [toggleMsg, setToggleMsg] = useState(true);
    const noFeeding = () => {
      setToggleMsg(false);
    };

    const msg = (
      <>
        Du har redan matat {current?.name}, du kan mata {current?.name} igen{" "}
        {nextFeed}
      </>
    );

    const showAnimal = (
      <>
        <div className="clickedAnimal">
          <div key={current?.id} id="animalContainer" className={"fed"}>
            <div id={current.name} className={"feedingMessage"}>
              {feedingMessage}
            </div>
            <div className="imageContainer">
              <img
                className={current.isClean ? "clean" : "notCleaned"}
                id="animal"
                src={current?.imageUrl}
                alt="picture of animal"
              />
              <img
                id={current.id === 5 ? "hide" : "bucket"}
                src={bucket}
                alt="picture of animal"
              />
            </div>

            <div className="textContainer">
              <h2 className="title">{current?.name}</h2>
              <p>{current?.description}</p>
              <p>Matades senast: {current?.lastFed}</p>
              <p>{toggleMsg ? "" : msg}</p>

              <div className="buttonContainer">
                <button onClick={handleFeedingClick}>
                  <FontAwesomeIcon icon={faLeaf} />
                </button>
                <button onClick={handleWater}>
                  <FontAwesomeIcon icon={faDroplet} />
                </button>
                <button onClick={handleCleaning}>
                  <FontAwesomeIcon icon={faPoo} />
                </button>
                <Link to={"/animals"}>
                  <button>Tillbaka</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );

    return (
      <>
        <Navbar></Navbar>
        {showAnimal}
        <Footer></Footer>
      </>
    );
  }
};
