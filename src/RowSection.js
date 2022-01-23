import React from 'react';
import "./RowSection.css";

function RowSection({ image, cardHeading, details, flag}) {
    return (
        <div className={!flag ? "rowsection" : "rowsectiontwo"}>
            <div className="card">
                <img src={image} alt="" className={!flag ? "card__image" : "card__imageFeatures"} />
                <div className="card__details">
                    <h1 className={!flag ? "card__detailsHeading" : "card__detailsFeatures"}>{cardHeading}</h1>
                    <p className="card__detailsText">{details}</p>
                    {!flag && <div className="card__detailsButtons">
                        <div className="button__groups">
                            <a href="" className="button">View Details</a>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default RowSection;
