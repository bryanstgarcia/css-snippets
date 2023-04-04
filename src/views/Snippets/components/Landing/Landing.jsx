import React from 'react';
import './index.scss';
import { ArrowDotSVG } from '../../../../components/svg';

const Landing = (props) => {
    return(
        <div className="landing-box animate">
            <div className="landing-box__arrow arrow-1">
                <ArrowDotSVG />
            </div>
            <div className="bubble bubble-xs animate" style={{
                
            }} />
            <div className="bubble bubble-sm animate"  style={{
                
            }} />
            <div className="landing__bubble animate">
                <h1>
                    <span>CSS</span>
                    <span>Snippets</span>
                </h1>
                <p>by: Bryan García</p>
            </div>
            <div className="bubble bubble-md animate"  style={{
                
            }} />
            <div className="bubble bubble-lg animate" style={{
                
            }} />
            <div className="landing-box__arrow arrow-2">
                <ArrowDotSVG />
            </div>
        </div>
    )
}

export default Landing;