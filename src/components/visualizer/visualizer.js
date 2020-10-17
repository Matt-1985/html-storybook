import "./visualizer.css";
import { createElement } from "../../utils/elements";

export const createVisualizer = () => {
  const visualizerContainer = createElement("div", {
    className: "visualizerContainer",
  });

  const heightButton = createElement("button", {
      className: "visualizerContainer__btn",
      onclick: () => {
        const lines = document.getElementsByClassName("line");
        // lines[0].style.height = `${createRandomHeight(50)}px`,
        lines.forEach((balken) => {
            balken.style.height =`${createRandomHeight(100)}px`,

            
        });
    },

  });

  for (let i = 0; i < 30; i++) {
    const einDiv = createElement("div", {
      className: "line",
    });

    einDiv.style.height = `${createRandomHeight(100)}px`;
    visualizerContainer.append(einDiv);
  }
  visualizerContainer.append(heightButton);
  return visualizerContainer;
};

const createRandomHeight = (maximalHeightNumber) => {
  const createRandomHeight = Math.random() * maximalHeightNumber;
  return createRandomHeight;
};
