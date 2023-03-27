export class Hero {
  name: string;
  image: string;
  desc: string;
  comics: string;
  series: string;
  stories: string;
  events: string;
  dialog: boolean = false;
  constructor(
    name: string,
    image: string,
    desc: string,
    comics: string,
    series: string,
    stories: string,
    events: string,
  ) {
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.comics = comics;
    this.series = series;
    this.stories = stories;
    this.events = events;
  }
  toggleDialog = (): boolean => {
    this.dialog = !this.dialog;
    console.log(this.dialog);
    
    return this.dialog
  };
}
