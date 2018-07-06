import {connect} from 'react-redux';

import MovieCard from './MovieCard';
import {acceptMovie, rejectMovie} from "../actions/movieEvaluation";

const mapStateToProps = state => {
    const movieShown = state.movies.find(movie => movie.shown);
    return {
        id: movieShown ? movieShown.id : null,
        title: movieShown ? movieShown.title : null,
        rating: movieShown ? movieShown.rating : null,
        imageURL: movieShown ? movieShown.imageURL : '',
        summary: movieShown ? movieShown.summary : null,
        acceptButtonLabel: movieShown ? (movieShown.accepted ? 'Accept again' : 'Accept') : 'Accept',
        rejectButtonLabel: movieShown ? (movieShown.rejected ? 'Reject again' : 'Reject') : 'Reject'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        acceptHandler: id => {
            dispatch(acceptMovie(id));
        },
        rejectHandler: id => {
            dispatch(rejectMovie(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);