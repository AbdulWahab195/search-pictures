import React from "react";

const ImageList = props => {
    
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt="value" style={{ width: '46%', display: 'inline-block', margin: '1%', verticalAlign: 'top'  }} />;
    });

    return <div>{images}</div>
};

export default ImageList;