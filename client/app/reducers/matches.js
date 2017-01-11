import {INIT_PERSONALITY_MATCHES} from '../actions/index.js'
import {SET_MATCHES} from '../actions/index.js'


export function matches (state=[], action) {
  if(action.type === SET_MATCHES) {
    return action.posts
  }
  return state;
}

export function personalityMatches (state=[], action) {
  switch(action.type) {
    case INIT_PERSONALITY_MATCHES:
      return [...state, ...action.matches];
    default:
      return state;
  }
  return state;
}

