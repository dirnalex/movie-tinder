import React from 'react';

import MovieHeader from './MovieHeader';
import ButtonWithIcon from './ButtonWithIcon';
import AcceptIcon from 'react-icons/lib/md/done';
import RejectIcon from 'react-icons/lib/md/clear';

const MovieCard = ({id, title, rating, imageURL, summary, acceptHandler, rejectHandler}) => (
    <div className="MovieCard">
        <div className="scrolledContent">
            <MovieHeader title={title} rating={rating}/>
            <img src={imageURL}/>
            <p>{summary ? summary : 'Summary placeholder'}</p>
        </div>
        <div className="fixedContent">
            <div className="ButtonContainer">
                <ButtonWithIcon styleName="AcceptButton" icon={AcceptIcon} label="Accept"
                                clickHandler={() => acceptHandler(id)}/>
                <ButtonWithIcon styleName="RejectButton" icon={RejectIcon} label="Reject"
                                clickHandler={() => rejectHandler(id)}/>
            </div>
        </div>
    </div>
);

export default MovieCard;