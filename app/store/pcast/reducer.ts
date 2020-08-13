import { PcastActions } from './types';
import { PcastState } from './types';
import { podcasts, otherPodcasts, authors } from '../../data';
import { categories, topics, episodes } from '../../data';

const initState: PcastState = {
  podcasts,
  otherPodcasts,
  authors: [
    authors.harlod,
    authors.gregory,
    authors.leslie,
    authors.rosemary,
    authors.harlod,
  ],
  SearchResult: [],
  categories,
  topics,
  tabAuthors: [authors.robet, authors.rowling, authors.mary],
  episodes,
  activeTopic: -1,
};

function PcastReducer(previousState = initState, action: PcastActions) {
  const state = { ...previousState };

  switch (action.type) {
    case 'P_CAST':
      return state;

    case 'SEARCH_PCAST':
      state.SearchResult = [];
      if (action.payload) {
        state.SearchResult = podcasts.filter(({ name }) =>
          name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()),
        );
      }
      return state;

    case 'ACTIVE_TOPIC':
      state.activeTopic = action.payload;
      return state;

    default:
      return state;
  }
}

export { PcastReducer };
