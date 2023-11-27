import React, { useState } from 'react';
import '../css/EventHost.css'

const Dashboard = () => {
    const [selectedOption,setSelectedOption] = useState('companies');

    const companies = [
        { name: 'Amazon', booth: 101, location: 'Squires Commonwealth Ballroom' },
        { name: 'Adobe', booth: 102, location: 'Squires Commonwealth Ballroom' },
        // ... add more companies here
    ];

    const jobSeekers = [
        { name: 'Alice', email: 'alice@email.com' },
        { name: 'Bob', email: 'bob@email.com' },
        // ... add more job seekers here
    ];

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    
    return (

        <div className='EventHost'>
            <div className='head'>
                <h2>Please select an option to view</h2>
            </div>
            <div className='select-dropdown'>
            <select onChange={handleSelectChange}>
                <option value="companies">Companies</option>
                <option value="jobSeekers">Job Seekers</option>
            </select>
            </div>

            {selectedOption === 'companies' && (
                <div>
                    <h2>Company List</h2>
                    <ul>
                        {companies.map((company, index) => (
                            <li key={index}>{`${company.name}, Booth: ${company.booth}, Location: ${company.location}`}</li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedOption === 'jobSeekers' && (
                <div>
                    <h2>Job Seekers List</h2>
                    <ul>
                        {jobSeekers.map((jobSeeker, index) => (
                            <li key={index}>{`${jobSeeker.name}, Email: ${jobSeeker.email}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
