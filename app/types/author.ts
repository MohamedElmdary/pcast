import { Podcast } from './podcast';
import { Colors } from '../utils';

class Author {
  constructor(
    public id: number,
    public name: string,
    public image: { uri: string },
    public social: { facebook: string; instgram: string; twitter: string },
    public podcasts: number,
    public rate: number,
    public description: string,
    public followers: number,
    public color: keyof typeof Colors,
    public recent: Podcast[],
    public popular: Podcast[],
    public asGuest: Podcast[],
  ) {}
}

export { Author };
