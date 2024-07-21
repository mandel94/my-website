import React from "react";



const Card = ({ image, title, content }) => {
    return (
        <div className="card">
            <img src={image} alt="Card Image" className="card__image" />
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__content">{content}</p>
            </div>
        </div>
    )
};


export default Card;