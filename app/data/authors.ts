import { Author } from '../types';

const social = {
  facebook: 'https://www.facebook.com',
  instgram: 'https://www.instgram.com',
  twitter: 'https://www.twitter.com',
};

const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ut aspernatur nihil ratione quas, eum, aperiam natus quaerat sequi voluptatem necessitatibus excepturi placeat quidem recusandae repellendus animi pariatur optio molestiae! Delectus recusandae quis eum minima consectetur et explicabo. Sed, quibusdam suscipit? Quo asperiores quia culpa doloribus odit possimus commodi molestiae repellendus beatae doloremque officia eligendi saepe blanditiis modi hic a aspernatur, eos repellat esse. Necessitatibus vero dolore obcaecati repellendus inventore nam est magni, eos quibusdam dicta, fuga molestias fugit temporibus cum commodi expedita quisquam veniam natus vitae delectus dolor velit unde numquam! Voluptatibus corrupti corporis perspiciatis ex maiores ducimus ipsa.`;

const authors = {
  // prettier-ignore
  harlod: new Author(0, 'Harold Mccoy', require('../../assets/images/author0.png'), social, 7286, 6.8, description, 1300, 'red',[], [], []),
  // prettier-ignore
  rosemary: new Author(1, 'Rosemary Richards', require('../../assets/images/author1.png'), social, 7286, 6.8, description, 1300, 'green',[], [], []),
  // prettier-ignore
  gregory: new Author(2, 'Gregory Miles', require('../../assets/images/author2.png'), social, 7286, 6.8, description, 1300, 'blue',[], [], []),
  // prettier-ignore
  leslie: new Author(3, 'Leslie Fisher', require('../../assets/images/author3.png'), social, 7286, 6.8, description, 1300, 'red',[], [], []),
  // prettier-ignore
  robet: new Author(4, 'Robert Dugoni', require('../../assets/images/author4.png'), social, 7286, 6.8, description, 1300, 'blue',[], [], []),
  // prettier-ignore
  rowling: new Author(5, 'J.K. Rowling', require('../../assets/images/author5.png'), social, 7286, 6.8, description, 1300, 'red',[], [], []),
  // prettier-ignore
  mary: new Author(6, 'Mary Beth Keane', require('../../assets/images/author6.png'), social, 7286, 6.8, description, 1300, 'green',[], [], [])
};

export { authors };
