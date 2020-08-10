import { Podcast } from '../types';
import { authors } from './authors';

const podcasts: Podcast[] = [
  // prettier-ignore
  new Podcast(0, 'About flow and our motivations', require('../../assets/images/podcast0.png'), authors.harlod, true, 37501, '23.05.2019', [24, 15, 5]),
  // prettier-ignore
  new Podcast(1, 'A sit ut iaculis nibh tincidunt feugiat', require('../../assets/images/podcast1.png'), authors.rosemary, true, 37501, '23.05.2019', [24, 15, 5]),
  // prettier-ignore
  new Podcast(2, 'Bibendum quis gravida ultricies', require('../../assets/images/podcast2.png'), authors.gregory, false, 37501, '23.05.2019', [24, 15, 5]),
];

export { podcasts };
