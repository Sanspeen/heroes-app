export class Hero {
  name: string;
  image: string;
  desc: string;
  comicsAmount: number;
  seriesAmount: number;
  storiesAmount: number;
  eventsAmount: number;
  dialog: boolean = false;
  shortDesc: boolean = false;
  constructor(
    name: string,
    image: string,
    desc: string,
    comicsAmount: number,
    seriesAmount: number,
    storiesAmount: number,
    eventsAmount: number
  ) {
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.comicsAmount = comicsAmount;
    this.seriesAmount = seriesAmount;
    this.storiesAmount = storiesAmount;
    this.eventsAmount = eventsAmount;
  }

  toggleDialog = (): boolean => {
    this.dialog = !this.dialog;
    return this.dialog;
  };
  
  toggleShortDesc = (): boolean => {
    this.shortDesc = !this.shortDesc;
    return this.shortDesc;
  };
}
