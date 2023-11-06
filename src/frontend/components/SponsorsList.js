import React, { useState } from 'react';
import '../css/SponsorsList.css';

function SponsorsList(props) {
    // State to keep track of the selected sponsor
    const [selectedSponsor, setSelectedSponsor] = useState(null);

    const handleSelect = (sponsor) => {
        setSelectedSponsor(sponsor);
        props.onSelect(sponsor);
    };

    return (
        <div className="sponsorsList">
            {props.sponsors.map((sponsor, index) => (
                <div
                    key={index}
                    onClick={() => handleSelect(sponsor)}
                    // Add a class to indicate if this sponsor is the selected one
                    className={selectedSponsor === sponsor ? 'selected' : ''}
                >
                    Job Role: {sponsor.role}<br /><br />
                    Company Name: {sponsor.name}
                </div>
            ))}
        </div>
    );
}

export default SponsorsList;
