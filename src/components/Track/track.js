import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import pauseActionSrc from "../../assets/icon-pause-gradient.svg";

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

  let isPlaying = false;

  buttonElement.onclick = function () {
    if (isPlaying) {
      audioElement.pause();
      playActionElement.src = playActionSrc;
      playActionElement.alt = "Play Button";
    } else {
      audioElement.play();
      playActionElement.src = pauseActionSrc;
      playActionElement.alt = "Pause Button";
    }

    isPlaying = !isPlaying;
  };

  return trackElement;
}
