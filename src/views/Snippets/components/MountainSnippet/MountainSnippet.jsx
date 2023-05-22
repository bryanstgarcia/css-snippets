import React from 'react';
import './index.scss';
import { Card, CardFace, SnippetBox } from '../../../../components/common';
import Mountain from '../Mountain';

const MountainSnippet = (props) => {
    return(
        <SnippetBox backgroundColor={'linear-gradient(180deg, #E7EC0D 0%, #0B893D 100%)'}>
            <div className={`mountain-box`}>
                <Card>
                    <CardFace isFront={true}>
                        <Mountain />
                    </CardFace>
                    <CardFace isFront={false}>
                        <div>Soy la cara trasera jiji</div>
                    </CardFace>
                </Card>
            </div>
        </SnippetBox>
    )
}

export default MountainSnippet;