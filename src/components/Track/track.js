import "./track.css";
import playActionSrc from "../../assets/play-action.svg";

export function createTrackElement(track) {
  const trackElement = document.createElement("div");
  trackElement.className = "track";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;
  titleElement.className = "title__elm";

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;
  artistElement.className = "artist__elm";

  const imgElement = document.createElement("img");
  imgElement.src = track.imgSrc;
  imgElement.alt = `Image of ${track.artist}`;
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

  const audioElement = new Audio(track.audioSrc);
  buttonElement.onclick = function () {
    audioElement.play();
  };

  return trackElement;
}
