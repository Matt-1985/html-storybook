import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

const billyJean = {
  title: "Billie Jean",
  artist: "Michael Jackson",
  imgSrc:
    "https://img.discogs.com/p2pwxtYqxr5koLwoQ6jRcjgkjmI=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-216956-1254392826.jpeg.jpg",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Sirona-Records/Demoiselle_Dner/Archives/Demoiselle_Dner_-_18_-_Soulagement.mp3",
};

const tru = {
  title: "True",
  artist: "Brandy",
  imgSrc: "https://i.ytimg.com/vi/zz6XZuEn4qg/maxresdefault.jpg",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Alpha_Hydrae/A_Monplaisir_Best-Of__Lets_hear_that_crap/Alpha_Hydrae_-_11_-_Keratine_rust_and_clear_soul.mp3",
};

const singleLadies = {
  title: "Single Ladies",
  artist: "Beyonce",
  imgSrc:
    "https://www.tvovermind.com/wp-content/uploads/2017/05/singleladies_image-640x394.jpg",
  audioSrc:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Alpha_Hydrae/uu_/Alpha_Hydrae_-_04_-_Keratine_rust_and_a_clear_soul.mp3",
};

const playlist = [billyJean, tru, singleLadies];

export const tracklist = () => {
  const container = document.createElement("div");

  playlist.forEach((song) => {
    let element = createTrackElement(song);
    container.append(element);
  });

  return container;
};
