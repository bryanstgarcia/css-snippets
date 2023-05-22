import React from 'react';
import PropTypes from 'prop-types';
import './index.scss'
const CardFace = ({ isFront, children }) => {
    return (
        <div className={`card__face ${isFront ? "front" : "back"}`}>
            {children}
        </div>
    )
}

CardFace.propTypes = {
    isFront: PropTypes.bool.isRequired
}

export default CardFace;