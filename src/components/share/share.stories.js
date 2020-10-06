import "./share.css";
import shareText from "./share-text.html";
import shareLogo from "./share-logo.html";

export default { title: "Components/Share" };

export const withText = () => shareText;
export const withLogo = () => shareLogo;
