import { Episode } from '../types';
import { podcasts } from './podcasts';

const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia cupiditate, voluptatem placeat ipsum id in. Ea maxime non illum unde animi pariatur a est voluptatum minima nobis, et iusto ut magnam aliquid numquam consectetur recusandae commodi quia nisi. Ipsa totam consequuntur minima libero culpa? Rerum incidunt pariatur accusantium dolore. Vero neque eius inventore saepe excepturi omnis, aliquid assumenda suscipit ab tenetur porro repellat aliquam id, maxime dicta repudiandae sint itaque ea laboriosam amet? Reiciendis dolor error ratione asperiores quas quia nemo impedit iste. Id minima mollitia itaque minus, sunt totam deleniti, ea est corrupti dignissimos exercitationem, asperiores earum! Animi?`;

const episodes: Episode[] = [
  new Episode(0, 'Episode 1', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(1, 'Episode 2', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(2, 'Episode 3', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(3, 'Episode 4', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(4, 'Episode 5', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(5, 'Episode 6', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(6, 'Episode 7', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(7, 'Episode 8', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(8, 'Episode 9', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(9, 'Episode 10', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(10, 'Episode 11', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(11, 'Episode 12', podcasts[0], desc, [10, 15, 0], 10),
  new Episode(12, 'Episode 13', podcasts[0], desc, [10, 15, 0], 10),
];

export { episodes };
