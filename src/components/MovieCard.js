import React from 'react';

import MovieHeader from './MovieHeader';
import ButtonWithIcon from './ButtonWithIcon';
import AcceptIcon from 'react-icons/lib/md/done';
import RejectIcon from 'react-icons/lib/md/clear';

const MovieCard = (movieInfo) => (
    <div className="MovieCard">
        <div className="scrolledContent">
            <MovieHeader title={movieInfo.title} rating={movieInfo.rating}/>
            <img src={movieInfo.imageURL}/>
            <p>{movieInfo.summary}</p>
        </div>
        <div className="fixedContent">
            <div className="ButtonContainer">
                <ButtonWithIcon styleName="AcceptButton" icon={AcceptIcon} label="Accept"/>
                <ButtonWithIcon styleName="RejectButton" icon={RejectIcon} label="Reject"/>
            </div>
        </div>
    </div>
);

export default MovieCard;