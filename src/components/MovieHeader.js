import React from 'react';

const MovieHeader = ({title, rating}) => {
    const ratingString = (typeof rating === 'number' && !isNaN(rating) && rating >= 0 && rating <= 10) ?
        ` (${rating}/10)` :
        '';
    return (
        <h1 className="MovieHeader">{title ? title : 'Title placeholder'}{ratingString}</h1>
    )
};

export default MovieHeader;