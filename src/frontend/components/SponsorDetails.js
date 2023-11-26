import React, { useState } from 'react';
import '../css/SponsorDetails.css';
import axios from 'axios';


function SponsorDetails(props) {
    const { name, role, jobId, description, requirements, prefered } = props.sponsor;
    const requirementItems = requirements.split('.').filter(item => item.trim() !== '');
    const preferedItems = prefered.split('.').filter(item => item.trim() !== '');
    const [showMeetingInfo, setShowMeetingInfo] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // const handleAppointmentClick = () => {
    //     setShowPopup(true);
    //     setTimeout(() => {
    //         setShowPopup(false);
    //     }, 2000); // 2 seconds
    // };
    const handleAppointmentClick = () => {
        setShowPopup(true);
        
        // Define emailData with the necessary information
        const emailData = {
            userEmail: "pranav0909@vt.edu", // Replace with the actual user's email
            meetingDetails: "Tue, Nov 24th, 2023 | 9:00 AM - 10:00 AM EDT" // Replace with actual meeting details
        };
    
        // Axios POST request to send the email
        axios.post('http://localhost:4000/send-email', emailData)
            .then(response => {
                console.log('Email sent successfully:', response.data);
                // Handle success - maybe update the state to show a success message
            })
            .catch(error => {
                console.error('Error in sending email:', error);
                // Handle error - maybe update the state to show an error message
            });
    
        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // Hide popup after 2 seconds
    };
    

    return (
        <div className="sponsorDetails">
            <h1>{role}</h1>
            <p><strong>About Us</strong><br></br><br></br>{description}</p>
            <strong>Key Requirements</strong>
            <ul>
                    {requirementItems.map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                    ))}
            </ul>
            <strong>Prefered Qualifications</strong>
            <ul>
                    {preferedItems.map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                    ))}
            </ul>

            <p><strong>Job Id:  </strong>{jobId}</p>
            

            <div className="meetingToggle" onClick={() => setShowMeetingInfo(!showMeetingInfo)}>
                <span className="clockIcon">🕐</span>
                <span>Ready to meet with a recruiter?</span>
                <span className="dropdownArrow">{showMeetingInfo ? '▲' : '▼'}</span>
            </div>
            {showMeetingInfo && (
                <div className="meetingInfo">
                    <div className="leftInfo">
                        <div className="dateInfo">
                            <h3>Schedule Time</h3>
                            <h4>Tue, Nov 24th, 2023 | 9:00 AM - 10:00 AM EDT</h4>
                        </div>
                        <div className="interactionType">
                            <h3>Interaction Type</h3>
                            <h4>CF Plus Video Room</h4>
                        </div>
                    </div>
                    <div className="rightInfo">
                        <div className="recruiterInfo">
                            <h3>Assigned Recruiter</h3>
                            <h4>Karen Sturzenacker</h4>
                        </div>
                       {/* <div className="availableSlots"> 
                            <h3>Available Timeslots</h3>
                           <h4>2</h4><button>Appointment</button>
                        {/* </div>  */}
                        <div className="availableSlots"> 
                        <button onClick={handleAppointmentClick}>Make an Appointment</button>
                        {showPopup && (
                <span className="popup">
                     ✔ Your meeting is scheduled.
                </span>
            )}
                        </div>
                    </div>
                </div>
            )}
            {showMeetingInfo && (
                <div className="meetingInfo">
                    <div className="leftInfo">
                        <div className="dateInfo">
                            <h3>Schedule Time</h3>
                            <h4>Fri, Nov 26th, 2023 | 2:00 PM - 3:00 PM EDT</h4>
                        </div>
                        <div className="interactionType">
                            <h3>Interaction Type</h3>
                            <h4>CF Plus Video Room</h4>
                        </div>
                    </div>
                    <div className="rightInfo">
                        <div className="recruiterInfo">
                            <h3>Assigned Recruiter</h3>
                            <h4>John Sable</h4>
                        </div>
                       <div className="availableSlots"> 
                            <h3>Available Timeslots</h3>
                           <h4>2</h4><button>Appointment</button>
                        </div>  
                        <div className="availableSlots"> 
                         <button onClick={handleAppointmentClick}>Make an Appointment</button>
                        {showPopup && (
                <span className="popup">
                     ✔ Your meeting is scheduled.
                </span>
          )}
                        </div>
                    </div>
                </div>
                
            )}
        </div>
        
    );
}

export default SponsorDetails;
