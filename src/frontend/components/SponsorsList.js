import React from 'react';
import '../css/SponsorsList.css';

function SponsorsList(props) {
    return (
        <div className="sponsorsList">
            {props.sponsors.map((sponsor, index) => (
                <div key={index} onClick={() => props.onSelect(sponsor)}>
                    {sponsor.name}<br></br>
                    Interview Location 
                </div>
            ))}
        </div>
    );
}

export default SponsorsList;
