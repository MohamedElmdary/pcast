import { Podcast } from '../types';
import { authors } from './authors';

const podcasts: Podcast[] = [
  // prettier-ignore
  new Podcast(0, 'About flow and our motivations', 'podcast0', authors.harlod, true, 37501, new Date('23.05.2019'), [24, 15, 5]),
  // prettier-ignore
  new Podcast(1, 'A sit ut iaculis nibh tincidunt feugiat', 'podcast1', authors.rosemary, true, 37501, new Date('23.05.2019'), [24, 15, 5]),
  // prettier-ignore
  new Podcast(2, 'Bibendum quis gravida ultricies', 'podcast2', authors.gregory, false, 37501, new Date('23.05.2019'), [24, 15, 5]),
];

export { podcasts };
