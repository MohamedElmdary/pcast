import { Author } from './author';

class Podcast {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public authors: Author,
    public isNew: boolean,
    public likes: number,
    public date: Date,
    public length: [number, number, number],
    public otherPodcasts: Podcast[] = [],
    public episode: number = 0,
    public size: number = 0,
    public description: string = '',
  ) {}
}

export { Podcast };
