export class Video {
  //décalration des propriétés du model Video
  title: string;
  imgPath: string;
  description: string;
  category: string;
  //permet d'initialiser une instance de Video
  constructor(
    title: string,
    imgPath: string,
    description: string,
    category: string
  ) {
    this.title = title;
    this.imgPath = imgPath;
    this.description = description;
    this.category = category;
  }
}
