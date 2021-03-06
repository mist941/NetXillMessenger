export class Planet {

  private radius: number;
  private race: string;

  constructor(options) {
    this.radius = options.radius;
    this.race = options.race;
  }

  get radiusInfo() {
    return this.radius;
  }

  set updateRadius(radius) {
    this.radius = radius;
  }
}