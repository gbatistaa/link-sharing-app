export type Plataform = "GitHub" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook" | "Twitch" | "Dev.to" | "Codewars" | "freeCodeCamp" | "GitLab" | "Hashnode" | "StackOverflow";

export default class UserLink {
  public url: string;
  public plataform: Plataform;
  constructor(url: string, plataform: Plataform) {
    this.url = url;
    this.plataform = plataform;
  }
}
