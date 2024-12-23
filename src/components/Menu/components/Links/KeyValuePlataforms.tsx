import Codewars from "../../../../../assets/images/logo/icon-codewars";
import Devto from "../../../../../assets/images/logo/icon-devto";
import Facebook from "../../../../../assets/images/logo/icon-facebook";
import FreeCodeCamp from "../../../../../assets/images/logo/icon-freecodecamp";
import GitHub from "../../../../../assets/images/logo/icon-github";
import GitLab from "../../../../../assets/images/logo/icon-gitlab";
import HashNode from "../../../../../assets/images/logo/icon-hashnode";
import LinkedIn from "../../../../../assets/images/logo/icon-linkedin";
import StackOverFlow from "../../../../../assets/images/logo/icon-stack-overflow";
import Twitch from "../../../../../assets/images/logo/icon-twitch";
import Twitter from "../../../../../assets/images/logo/icon-twitter";
import YouTube from "../../../../../assets/images/logo/icon-youtube";
import { Plataform } from "../../../../ts/classes/Link";
import { iconColorSelector } from "../../../../ts/logic/ColorSelectors";

function KeyValuePlataforms({
  plataform,
  colorState,
}: {
  plataform: Plataform;
  colorState: boolean | "card";
}): JSX.Element {
  const color = iconColorSelector(colorState);

  switch (plataform) {
    case "GitHub":
      return <GitHub fillColor={color} />;
    case "Twitter":
      return <Twitter fillColor={color} />;
    case "LinkedIn":
      return <LinkedIn fillColor={color} />;
    case "YouTube":
      return <YouTube fillColor={color} />;
    case "Facebook":
      return <Facebook fillColor={color} />;
    case "Twitch":
      return <Twitch fillColor={color} />;
    case "Dev.to":
      return <Devto fillColor={color} />;
    case "Codewars":
      return <Codewars fillColor={color} />;
    case "freeCodeCamp":
      return <FreeCodeCamp fillColor={color} />;
    case "GitLab":
      return <GitLab fillColor={color} />;
    case "Hashnode":
      return <HashNode fillColor={color} />;
    case "StackOverflow":
      return <StackOverFlow fillColor={color} />;

    default:
      return <div>None</div>;
  }
}

export default KeyValuePlataforms;
