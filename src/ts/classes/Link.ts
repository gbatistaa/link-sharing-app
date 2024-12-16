export type Plataform = "GitHub" | "Twitter" | "LinkedIn" | "YouTube" | "Facebook" | "Twitch" | "Dev.to" | "Codewars" | "freeCodeCamp" | "GitLab" | "Hashnode" | "StackOverflow";

export default class UserLink {
  public url: string;
  public plataform: Plataform;
  public id: number;
  constructor(url: string, plataform: Plataform, id:number) {
    this.url = url;
    this.plataform = plataform;
    this.id = id;
  }
}
