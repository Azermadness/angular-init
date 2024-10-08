export class Video {
  //décalration des propriétés du model Video
  id: number;
  title: string;
  imgPath: string;
  description: string;
  category: string;
  like?:boolean;
  note?:number;
  //permet d'initialiser une instance de Video
  constructor(
    id: number,
    title: string,
    imgPath: string,
    description: string,
    category: string
  ) {
    this.id = id;
    this.title = title;
    this.imgPath = imgPath;
    this.description = description;
    this.category = category;
  }

  onAddLike(): void {
    this.like = !this.like;
  }

  plusNote(): void {
    if (this.note != null) {
      this.note++;
    }
    else {
      this.note = 3;
    }
  }

  minusNote(): void {
    if (this.note != null) {
      this.note--;
    }
    else {
      this.note = 3;
    }
  }
}
