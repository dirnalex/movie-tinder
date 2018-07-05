import {ACCEPT_MOVIE, REJECT_MOVIE} from '../actions/movieEvaluation';
import {FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS} from '../actions/fetchProcess';

export default function movies(state = [], action) {
    switch (action.type) {
        case ACCEPT_MOVIE:
            return showNext(acceptMovie(state, action.id));
        case REJECT_MOVIE:
            return showNext(rejectMovie(state, action.id));
        case FETCH_MOVIES_SUCCESS:
            return showNext(action.movies);
        case FETCH_MOVIES_FAILURE:
            return [];
        default:
            return state;
    }
};

const acceptMovie = (movies, id) =>
    insertPropertiesToArrayConditionally(movies, movie => movie.id === id, {accepted: true, rejected: false});

const rejectMovie = (movies, id) =>
    insertPropertiesToArrayConditionally(movies, movie => movie.id === id, {accepted: false, rejected: true});

const insertPropertiesToArrayConditionally = (array, conditionFunction, properties) =>
    array.map(el => {
        if (conditionFunction(el)) {
            return {
                ...el,
                ...properties
            };
        } else {
            return {
                ...el
            };
        }
    });

const showNext = (movies) => {
    if (movies.empty()) {return [];}
    let currentShownIndex = -1;
    const moviesClearedOfShown = movies.forEach((movie, index) => {
        if (movie.shown) {
            currentShownIndex = index;
            delete movie.shown;
        }
    });
    const nextShownIndex = currentShownIndex < moviesClearedOfShown.length - 1 ? ++currentShownIndex : 0;
    moviesClearedOfShown[nextShownIndex].shown = true;
    return moviesClearedOfShown;
};