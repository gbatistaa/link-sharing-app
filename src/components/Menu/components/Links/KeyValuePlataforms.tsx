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

function KeyValuePlataforms({ plataform, selected }: { plataform: Plataform; selected: boolean }): JSX.Element {
  switch (plataform) {
    case "GitHub":
      return <GitHub fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Twitter":
      return <Twitter fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "LinkedIn":
      return <LinkedIn fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "YouTube":
      return <YouTube fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Facebook":
      return <Facebook fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Twitch":
      return <Twitch fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Dev.to":
      return <Devto fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Codewars":
      return <Codewars fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "freeCodeCamp":
      return <FreeCodeCamp fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "GitLab":
      return <GitLab fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "Hashnode":
      return <HashNode fillColor={`${selected ? "#737373" : "#633cff"}`} />;
    case "StackOverflow":
      return <StackOverFlow fillColor={`${selected ? "#737373" : "#633cff"}`} />;

    default:
      return <div>NOTHING</div>;
  }
}

export default KeyValuePlataforms;
