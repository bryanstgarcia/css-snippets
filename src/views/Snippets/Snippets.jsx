import React from 'react';
import { Hero, Mountain, MountainSnippet } from './components';
import './index.scss';

const Snippets = (props) => {
    return(
        <React.Fragment>
            <Hero />
            <MountainSnippet />
            <MountainSnippet />
        </React.Fragment>
    )
}

export default Snippets;