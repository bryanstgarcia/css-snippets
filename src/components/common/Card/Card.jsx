import React, { useState } from 'react';
import { useIntersectionObserver } from './../../../hooks'
import PropTypes from 'prop-types';
import './index.scss'
const Card = ({ children }) => {
    const [flip, setFlip ] = useState(false)
    const { ref, isVisible } = useIntersectionObserver()
    return (
        <div className="card-container" ref={ref}>
            <div className={`card ${flip ? "flip": ""}`} >
                { children }
            </div>
            <button 
                onClick={() => setFlip(prev => !prev)}
            >
                {flip ? "See animation" : "See description"}
            </button>
        </div>
    )
}

/* Card.propTypes = {
    FrontFace: PropTypes.element,
    BackFace: PropTypes.element,
} */

export default Card;