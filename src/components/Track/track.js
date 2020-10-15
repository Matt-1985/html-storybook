import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import pauseActionSrc from "../../assets/icon-pause-gradient.svg";
import { createElement } from "../../utils/elements";

export const createTrackElement = (track) => {
  const audioElement = new Audio(track.audioSrc);
  const playActionElement = createElement("img", {
    src: playActionSrc,
  });

  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("img", {
        src: track.imgSrc,
        alt: `Image of ${track.artist}`,
        className: "track__image",
      }),

      createElement("div", {
        className: "text__box",
        children: [
          createElement("h3", {
            innerText: track.title,
          }),
          createElement("p", {
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "action__btn",
        children: [playActionElement],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            showPlayBtn(playActionElement);
          } else {
            audioElement.play();
            showPauseBtn(playActionElement);
          }
        },
      }),
    ],
  });

  return trackElement;
};

// Funktionen
const showPlayBtn = (element) => {
  element.src = playActionSrc;
  element.alt = "Play Button";
};

const showPauseBtn = (element) => {
  element.src = pauseActionSrc;
  element.alt = "Pause Button";
};

//   const titleElement = document.createElement("h3");
//   titleElement.innerText = track.title;
//   titleElement.className = "title__elm";

//   const artistElement = document.createElement("p");
//   artistElement.innerText = track.artist;
//   artistElement.className = "artist__elm";

//   const createImgElement = () => {
//     const imgElement = document.createElement("img");
//     imgElement.src = track.imgSrc;
//     imgElement.alt = `Image of ${track.artist}`;
//     imgElement.className = "track__image";
//     return imgElement;
//   };

//   // const imgElement = document.createElement("img");
//   // imgElement.src = track.imgSrc;
//   // imgElement.alt = `Image of ${track.artist}`;
//   // imgElement.className = "track__image";

//   const buttonElement = document.createElement("button");
//   buttonElement.className = "action__btn";

//   const playActionElement = document.createElement("img");
//   playActionElement.src = playActionSrc;
//   buttonElement.append(playActionElement); //Bild in Button

//   const textBox = document.createElement("div");
//   textBox.className = "text__box";

//   textBox.append(titleElement, artistElement);
//   trackElement.append(createImgElement(), textBox, buttonElement);

//   const audioElement = new Audio(track.audioSrc);

//   let isPlaying = false;

//   buttonElement.onclick = function () {
//     if (isPlaying) {
//       audioElement.pause();
//       showPlayBtn(playActionElement);
//     } else {
//       audioElement.play();
//       showPauseBtn(playActionElement);
//     }

//     isPlaying = !isPlaying;
//   };

//

//
