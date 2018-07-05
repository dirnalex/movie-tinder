import React, {Component} from 'react';
import {connect} from 'react-redux';

import VisibleMovieCard from './VisibleMovieCard';
import {fetchMovies} from "../actions/fetchFromRemote";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const {error, loading} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return <VisibleMovieCard/>;
    }
}

const mapStateToProps = state => ({
    loading: state.fetchStatus.loading,
    error: state.fetchStatus.error
});

export default connect(mapStateToProps)(App);