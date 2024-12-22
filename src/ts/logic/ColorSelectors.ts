import { Plataform } from "../classes/Link";

export const iconColorSelector = (code: "card" | boolean): string => {
  switch (code) {
    case false:
      return "#737373";
    case true:
      return "#633cff";
    default:
      console.log(code);
      return "#ffffff";
  }
};

export const cardColorSelector = (plataform: Plataform): string => {
  switch (plataform) {
    case "GitHub":
      return "bg-github";
    case "Twitter":
      return "bg-twitter";
    case "LinkedIn":
      return "bg-linkedin";
    case "YouTube":
      return "bg-youtube";
    case "Facebook":
      return "bg-facebook";
    case "Twitch":
      return "bg-twitch";
    case "Dev.to":
      return "bg-devto";
    case "Codewars":
      return "bg-codewars";
    case "freeCodeCamp":
      return "bg-freecodecamp";
    case "GitLab":
      return "bg-gitlab";
    case "Hashnode":
      return "bg-hashnode";
    case "StackOverflow":
      return "bg-stackoverflow";
    default:
      return "";
  }
};
