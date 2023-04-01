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
  stories: Array<String> = [];
  lastThreeSeries: Array<String>;
  constructor(
    name: string,
    image: string,
    desc: string,
    comicsAmount: number,
    seriesAmount: number,
    storiesAmount: number,
    eventsAmount: number,
    series: Array<String>
  ) {
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.comicsAmount = comicsAmount;
    this.seriesAmount = seriesAmount;
    this.storiesAmount = storiesAmount;
    this.eventsAmount = eventsAmount;
    this.stories = series;
    this.lastThreeSeries = this.getLastThreeSeries();
  }

  toggleDialog = (): boolean => {
    this.dialog = !this.dialog;
    return this.dialog;
  };

  toggleShortDesc = (): boolean => {
    this.shortDesc = !this.shortDesc;
    return this.shortDesc;
  };

  getLastThreeSeries = (): Array<String> => {
    let lastThreeSeries: Array<String> = [];
    this.stories.forEach((value: any, index) => {
      if (index < 3) {
        lastThreeSeries.push(value.name);
      } else {
        return;
      }
    });
    return lastThreeSeries;
  };
}
