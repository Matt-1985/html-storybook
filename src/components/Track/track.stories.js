import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const beatIt = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const kinda = () => createTrackElement("Kinda Good", "Brandy");
export const flex = () => createTrackElement("Flex It", "JaRule");
