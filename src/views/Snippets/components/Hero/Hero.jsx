import React from 'react';
import './index.scss';
import { ArrowDotSVG } from '../../../../components/svg';
import { useIntersectionObserver } from '../../../../hooks';

const Hero = (props) => {
    const {ref, isVisible } = useIntersectionObserver()
    return(
        <div className={`landing-box ${isVisible ? "animate": "" }`} ref={ref} id="landing">
            <div className="landing-box__arrow arrow-1">
                <ArrowDotSVG />
            </div>
            <div className={`bubble bubble-xs ${isVisible ? "animate": ""}`} />
            <div className={`bubble bubble-sm ${isVisible ? "animate": ""}`}  />
            <div className={`landing__bubble ${isVisible ? "animate": ""}`}>
                <h1>
                    <span>CSS</span>
                    <span>Snippets</span>
                </h1>
                <p>by: Bryan García</p>
            </div>
            <div className={`bubble bubble-md ${isVisible ? "animate": ""}`}  />
            <div className={`bubble bubble-lg ${isVisible ? "animate": ""}`} />
            <div className="landing-box__arrow arrow-2">
                <ArrowDotSVG />
            </div>
        </div>
    )
}

export default Hero;