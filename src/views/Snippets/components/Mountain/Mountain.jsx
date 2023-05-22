import React from 'react';
import './index.scss';
import { useIntersectionObserver } from '../../../../hooks';

const Mountain = (props) => {
    const {ref, isVisible } = useIntersectionObserver()
    return (
        <div className={`frame ${isVisible ? "animate": "" }`} ref={ref}>
            <div className="center">
                <div className={`circle  ${isVisible ? "animate": "" }`}>
                    <div className={`sun  ${isVisible ? "animate": "" }`}></div>
                    <div className={`sky  ${isVisible ? "animate": "" }`}></div>
                    <div className={`pyramid-left  ${isVisible ? "animate": "" }`}></div>
                    <div className={`pyramid-right ${isVisible ? "animate": "" }`}></div>
                    <div className={`shadow  ${isVisible ? "animate": "" }`}></div>
                    <div className={`ground  ${isVisible ? "animate": "" }`}></div>
                </div>
            </div>
        </div>
    )
}

export default Mountain;