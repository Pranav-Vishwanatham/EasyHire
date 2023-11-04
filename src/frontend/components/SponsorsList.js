import React from 'react';
import '../css/SponsorsList.css';

function SponsorsList(props) {
    return (
        <div className="sponsorsList">
            {props.sponsors.map((sponsor, index) => (
                <div key={index} onClick={() => props.onSelect(sponsor)}>
                    {sponsor.role}<br></br><br></br>
                    {sponsor.name}
                </div>
            ))}
        </div>
    );
}

export default SponsorsList;
