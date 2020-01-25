// selectors
export const getSearchString = ({searchString}) => searchString;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({cards}) => cards.length;

// action name creator
// const reducerName = 'cards';
const reducerName = 'search';

const createActionName = name => `app/${reducerName}/${name}`;

// actions types
// export const ADD_CARD = createActionName('ADD_CARD');
export const CHANGE = createActionName('CHANGE');

// action creators
export const createActionChangeSearchString = payload => ({payload, type: CHANGE});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

