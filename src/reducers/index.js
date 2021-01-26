import { combineReducers } from 'redux';
import events from './events';
import skillset from './skillset';
import projects from './projects';

export default combineReducers({
  events,
  skillset,
  projects,
});
