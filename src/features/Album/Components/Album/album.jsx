import React from "react";
import PropTypes from 'prop-types';
import './album.scss'

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album__thumbnailUrl">
                <img src={album.thumbnailUrl} alt= {album.name}/>
            </div>
            <p className="album-name">{album.name}</p>
        </div>
    );
}

export default Album;