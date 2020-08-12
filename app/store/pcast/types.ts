import { Podcast, Author } from '../../types';

export interface PcastState {
  podcasts: Podcast[];
  otherPodcasts: Podcast[];
  authors: Author[];
  SearchResult: Podcast[];
}

export interface Pcast {
  type: 'P_CAST';
  payload: unknown;
}

export interface SearchPcast {
  type: 'SEARCH_PCAST';
  payload: string;
}

/**
 *
 */
export type PcastActions = Pcast | SearchPcast;