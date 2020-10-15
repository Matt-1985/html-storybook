import { createElement } from "../../utils/elements";
import "./control.css";



{/* <div>
  <div>
    <button>
      <img src="" alt="" />
    </button>
    <button>
      <img src="" alt="" />
    </button>
    <button>
      <img src="" alt="" />
    </button>
  </div>
  <div>
    <img src="" alt="" />
    <span></span>
    <img src="" alt="" />
    <span></span>
    <img src="" alt="" />
    <span></span>
  </div>
</div> */}

export const createTrackElement = (track) => {

const controlElement = createElement("div", {
className: "container",
children: [
    createElement("button", {
        className: "control__btn",
    }),
    createElement("img", {
        className: "control__img"
        src: control.imgSrc
        alt: "Backwards"
    }),

],

}),


}
