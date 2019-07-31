import React from 'react';
import './ArtistInput.css';

const ArtistInput = (props) => {
    return (
        <div className="input">
            <input type="text" placeholder="Search Artist" value={props.value} onChange={props.onChange} name="artist-input"/> 
        </div>
    )
}

export default ArtistInput