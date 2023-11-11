import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import SponsorsList from './SponsorsList';
import SponsorDetails from './SponsorDetails';
import '../css/jobseekerLanding.css';

function JobseekerLanding() {
    const [selectedSponsor, setSelectedSponsor] = useState(null);

    const [sponsors, setSponsers] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/sponsors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                const sponsorData = await response.json();
                setSponsers(sponsorData); // Update the state with the fetched data
            } else {
                const errorMessage = await response.text();
                alert(`Error: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="app">
            <SponsorsList sponsors={sponsors} onSelect={setSelectedSponsor} />
            {selectedSponsor && <SponsorDetails sponsor={selectedSponsor} />}
        </div>
    );
}

export default JobseekerLanding;
