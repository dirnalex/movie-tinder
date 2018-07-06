import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoadingIcon from 'react-icons/lib/md/autorenew';

import VisibleMovieCard from './VisibleMovieCard';
import {fetchMovies} from "../actions/fetchFromRemote";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const {error, loading} = this.props;
        if (error) {
            return <div className="errorMessage">Error! {error.message}</div>;
        }

        if (loading) {
            return <div className="loadingIcon"><LoadingIcon /></div>;
        }

        return <VisibleMovieCard/>;
    }
}

const mapStateToProps = state => ({
    loading: state.fetchStatus.loading,
    error: state.fetchStatus.error
});

export default connect(mapStateToProps)(App);