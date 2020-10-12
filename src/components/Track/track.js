import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import imgElementSrc from "../../assets/michael2.png";
import { doc } from "prettier";

export function createTrackElement(title, artist) {
  const trackElement = document.createElement("div");
  trackElement.className = "track";

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;
  titleElement.className = "title__elm";

  const artistElement = document.createElement("p");
  artistElement.innerText = artist;
  artistElement.className = "artist__elm";

  const imgElement = document.createElement("img");
  imgElement.src = imgElementSrc;
  imgElement.alt = `Image of ${artist}`;
  imgElement.className = "track__image";

  const buttonElement = document.createElement("button");
  buttonElement.className = "action__btn";

  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;
  buttonElement.append(playActionElement); //Bild in Button

  const textBox = document.createElement("div");
  textBox.className = "text__box";

  textBox.append(titleElement, artistElement);
  trackElement.append(imgElement, textBox, buttonElement);

  buttonElement.onclick = function () {
    alert("Click!");
  };

  return trackElement;
}
