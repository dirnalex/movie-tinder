export const ACCEPT_MOVIE = 'ACCEPT_MOVIE';
export const REJECT_MOVIE = 'REJECT_MOVIE';

export const acceptMovie = id => ({
    type: ACCEPT_MOVIE,
    id
});

export const rejectMovie = id => ({
    type: REJECT_MOVIE,
    id
});