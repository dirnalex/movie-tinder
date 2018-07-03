import {connect} from 'react-redux';
import MovieCard from './MovieCard';

const mapStateToProps = state => {
    return {
        movieInfo: state.currentMovieInfo
    }
};

const VisibleMovieCard = connect(mapStateToProps)(MovieCard);

export default VisibleMovieCard;