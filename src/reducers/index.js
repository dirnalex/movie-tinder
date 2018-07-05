import {combineReducers} from "redux";

import fetchStatus from './fetchStatus';
import movies from './movies';

export default combineReducers({
    fetchStatus,
    movies
});