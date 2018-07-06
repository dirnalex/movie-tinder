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

const acceptMovie = (movies, id) => {
    imitatePut(`/recommendations/${id}/accept`);
    return insertPropertiesToArrayConditionally(movies, movie => movie.id === id, {accepted: true, rejected: false});
};

const rejectMovie = (movies, id) => {
    imitatePut(`/recommendations/${id}/reject`);
    return insertPropertiesToArrayConditionally(movies, movie => movie.id === id, {accepted: false, rejected: true});
};

const imitatePut = (url) =>
    fetch(url, {method: 'PUT'})
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

const insertPropertiesToArrayConditionally = (array, conditionFunction, properties) =>
    array.map(el => {
        if (conditionFunction(el)) {
            return {...el, ...properties};
        } else {
            return {...el};
        }
    });

const showNext = (movies) => {
    if (movies.length === 0) {
        return [];
    }
    let currentShownIndex = -1;
    const moviesClearedOfShown = movies.map((movie, index) => {
        if (movie.shown) {
            currentShownIndex = index;
            return {...movie, shown: false};
        } else {
            return {...movie};
        }
    });
    const nextShownIndex = currentShownIndex < moviesClearedOfShown.length - 1 ? ++currentShownIndex : 0;
    moviesClearedOfShown[nextShownIndex].shown = true;
    return moviesClearedOfShown;
};