import React from 'react';

const MovieHeader = ({title, rating}) => (
    <h1>{title} ({rating}/10)</h1>
);
export default MovieHeader;