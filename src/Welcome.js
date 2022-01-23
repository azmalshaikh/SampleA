import React from 'react';
import "./Welcome.css"
import Design from "./images/design.png";

function Welcome() {
    return (
        <div className="welcome">
            <h2 className="welcome__heading">Welcome To City Palace</h2>
            <img src={Design} alt="Design" className="welcome__image" />

            <div className="welcome__details">
                <p className="paragraphone">
                    The Palace has a surprisingly harmonious blend of east and west and is considered among the most remarkable royal residences built during the 19th century. Its Architect, Sir Samuel Swinton Jacob, valued the contribution of local Indian craftsmen. The result is a grand structure with classical Mughal and Rajput touches adorning the exterior, and British-inspired interiors, complete with billiard, and card rooms. It is said to be Jacob’s finest creation.
                </p>
                <p className="paragraphone">
                    The exterior of City Palace is covered with impossibly delicate stone carving and has the distinctive hue of the red sandstone of the Thar Desert. The cupolas domes and balconies were carved by local craftsman with such delicacy that even today the solid red sand stone has the fragile appearance of lace.
                </p>
                <p className="paragraphone">
                    Guests may sample traditional local delicacies as well as continental fare and can dine al fresco in royal style, to the accompaniment of Rajasthani folk music and dance.
                </p>
                <p className="paragraphone">
                    The City Palace is perfect for those looking for nothing less than a royal experience – palatial rooms, exquisite gardens, and dancing peacocks are all included.
                </p>
            </div>
        </div>
    );
}

export default Welcome;
