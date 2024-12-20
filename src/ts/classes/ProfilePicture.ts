export interface PictureFile {
  name: string;
  size: number;
  type: string;
  content: string;
}

export interface ProfilePicture {
  file: PictureFile;
}
