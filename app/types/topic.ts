import { Author } from './author';

class Topic {
  constructor(
    public id: number,
    public full_name: string,
    public name: string,
    public image: { uri: string },
    public authorsNo: number,
    public podcasts: number,
    public followers: number,
    public recent: Topic[],
    public authors: Author[],
    public popular: Topic[],
  ) {}
}

export { Topic };
