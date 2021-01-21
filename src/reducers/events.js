import { TOGGLE_MENU } from '../actions/events';

const initialState = {
  menuOpened: false,
};

const events = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpened: action.payload,
      };
    default:
      return state;
  }
};

export default events;
