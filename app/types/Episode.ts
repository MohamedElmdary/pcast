import { Podcast } from './podcast';

export class Episode {
  constructor(
    public id: number,
    public name: string,
    public podcast: Podcast,
    public description: string,
    public length: [number, number, number],
    public size: number,
  ) {}
}
