import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const SnippetBox = ({ ref, backgroundColor, children }) => {
    return (
        <div ref={ref} className="snippet-box" style={{
            background: backgroundColor
        }}>
            {children}
        </div>
    )
}

SnippetBox.propTypes= {

}
export default SnippetBox;