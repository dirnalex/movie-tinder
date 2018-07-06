import React from 'react';
import Swipeable from 'react-swipeable';

import MovieHeader from './MovieHeader';
import AcceptIcon from 'react-icons/lib/md/done';
import RejectIcon from 'react-icons/lib/md/clear';

const MovieCard = ({id, title, rating, imageURL, summary, accepted, rejected, acceptHandler, rejectHandler}) => {
    window.scrollTo(0, 0);
    const acceptButtonLabel = accepted ? 'Accept again' : 'Accept';
    const rejectButtonLabel = rejected ? 'Reject again' : 'Reject';
    return (
        <Swipeable onSwipedRight={() => rejectHandler(id)} onSwipedLeft={() => rejectHandler(id)}>
            <div className="MovieCard">
                <div className="scrolledContent">
                    <MovieHeader title={title} rating={rating}/>
                    <img className="movieImg" src={imageURL}/>
                    <p className="movieSummary">{summary ? summary : 'Summary placeholder'}</p>
                </div>
                <div className="fixedContent">
                    <div className="buttonContainer">
                        <div className="acceptButton button"
                             onClick={() => acceptHandler(id)}><AcceptIcon/> {acceptButtonLabel}</div>
                        <div className="rejectButton button"
                             onClick={() => rejectHandler(id)}>{rejectButtonLabel} <RejectIcon/></div>
                    </div>
                </div>
            </div>
        </Swipeable>
    )
};

export default MovieCard;