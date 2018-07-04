export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const ACCEPT_MOVIE = 'ACCEPT_MOVIE';
export const REJECT_MOVIE = 'REJECT_MOVIE';

export const fetchMoviesBegin = () => ({
	type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
	type: FETCH_MOVIES_SUCCESS,
	movies
});

export const fetchMoviesFailure = error => ({
	type: FETCH_MOVIES_FAILURE,
	error
});

export const acceptMovie = id => ({
	type: ACCEPT_MOVIE,
	id
});

export const rejectMovie = id => ({
	type: REJECT_MOVIE,
	id
});