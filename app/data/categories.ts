import { Category, Gradient } from '../types';

const categories: Category[] = [
  new Category(
    'Art and entertainment',
    new Gradient(['#4BC0C8', '#FEAC5E'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Bussiness and technology',
    new Gradient(['#79D1D7', '#5487E9'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Health and lifestyle',
    new Gradient(['#F7BB97', '#DD5E89'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Society and culture',
    new Gradient(['#859398', '#283048'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Education',
    new Gradient(['#AACCCA', '#5BA05E'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Sport and recreation',
    new Gradient(['#4CA0BE', '#7029AF'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'Travels and adventures',
    new Gradient(['#F8CDDA', '#1D2B64'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
  new Category(
    'News and politics',
    new Gradient(['#CCCDAE', '#44203B'], { x: 0, y: 0 }, { x: 1, y: 1 }),
  ),
];

export { categories };
