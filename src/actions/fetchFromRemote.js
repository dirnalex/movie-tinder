import movies from './movies';
import {fetchMoviesBegin, fetchMoviesFailure, fetchMoviesSuccess} from "./fetchProcess";

export const fetchMovies = () => dispatch => {
    dispatch(fetchMoviesBegin());
    return imitateFetch()
        .then(handleErrors)
        .then(res => res.json())
        .then(movies => {
            dispatch(fetchMoviesSuccess(movies));
            return movies;
        })
        .catch(error => dispatch(fetchMoviesFailure(error)));
};

const imitateFetch = () =>
    new Promise((resolve) => {
        setTimeout(resolve.bind(this,
            {
                ok: true,
                json: () => movies
            }
        ), 2000);
    });

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};