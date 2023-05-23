import { Link } from "react-router-dom";
import "../scss/Navbar.scss";
import zooSvg from "../assets/zoo-clipart.svg";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <img id="zooLogo" src={zooSvg} alt="Bild på zoo" />
        </Link>
        <h2 id="title">Djurparken</h2>
        <ul id="navbar">
          <li>
            <Link to={"/"}>Hem</Link>
          </li>
          <li>
            <Link to={"/animals"}>Djuren</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
