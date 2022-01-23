import React from 'react';
import "./Offer.css";
import RowSection from './RowSection';

function Offer({heading, obj, flag}) {

    return (
        <div className="offers">
            <h2 className="offers__heading">{heading}</h2>
            <div className="offers_row">
                <RowSection  image={obj.first.image} cardHeading={obj.first.cardHeading} details={obj.first.details} flag={flag}/>
                <RowSection  image={obj.second.image} cardHeading={obj.second.cardHeading} details={obj.second.details}  flag={flag}/>
                <RowSection  image={obj.third.image} cardHeading={obj.third.cardHeading} details={obj.third.details} flag={flag} />
                {flag && <RowSection  image={obj.fourth.image} cardHeading={obj.fourth.cardHeading} flag={flag}/>}
                {flag && <RowSection  image={obj.fifth.image} cardHeading={obj.fifth.cardHeading} flag={flag}/>};
            </div>
        </div>
    );
}

export default Offer;
