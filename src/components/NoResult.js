import React from 'react';
import './No.css';

function NoResults () {
    return (
        <div className="no-container">
            <h2 className="no-title">No results found</h2>
            <p className="no-message">
                We couldn't find any results matching your search criteria.
            </p>
        </div>
    );
}

export default NoResults;