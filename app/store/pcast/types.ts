import { Podcast, Author, Category, Topic, Episode } from '../../types';

export interface PcastState {
  podcasts: Podcast[];
  otherPodcasts: Podcast[];
  authors: Author[];
  SearchResult: Podcast[];
  categories: Category[];
  topics: Topic[];
  tabAuthors: Author[];
  episodes: Episode[];
  activeTopic: number;
  activeAuthor: number;
}

export interface Pcast {
  type: 'P_CAST';
  payload: unknown;
}

export interface SearchPcast {
  type: 'SEARCH_PCAST';
  payload: string;
}

export interface ActiveTopic {
  type: 'ACTIVE_TOPIC';
  payload: number;
}

export interface ActiveAuthor {
  type: 'ACTIVE_AUTHOR';
  payload: number;
}

/**
 *
 */
export type PcastActions = Pcast | SearchPcast | ActiveTopic | ActiveAuthor;
