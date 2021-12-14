import React from 'react'

import './ImageBox.css';
const ImageBox = props => {
    return (
        <div className={"image-box"} style={{ backgroundImage: `url(${props.img})` }}>

        </div>
    )
}

export default ImageBox
