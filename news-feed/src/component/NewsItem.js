import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, url, mode } = props;
    return (
        <div className="card" style={{ backgroundColor: mode === 'dark' ? '#00000091' : 'white', color: mode === 'dark' ? 'white' : 'black' }}>
            <img src={imageUrl}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Know More</a>
            </div>
        </div>
    );
};

export default NewsItem;
