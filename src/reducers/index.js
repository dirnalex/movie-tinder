import movieFetchReducer from './movieFetchReducer';
import movieEvaluateReducer from './movieEvaluateReducer';

const rootReducer = (state = {}, action) => ({
	movieFetchReducer: movieFetchReducer(state.fetchStatus, action),
	movieEvaluateReducer: movieEvaluateReducer(state.movies, action)
});

export default rootReducer;