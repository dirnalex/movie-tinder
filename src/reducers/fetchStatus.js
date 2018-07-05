import {FETCH_MOVIES_BEGIN, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS} from '../actions/fetchProcess';

export default function fetchStatus(state = {loading: false, error: null}, action) {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {...action.error},
            };

        default:
            return state;
    }
};