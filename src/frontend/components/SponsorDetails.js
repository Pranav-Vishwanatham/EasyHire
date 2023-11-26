import React, { useState } from 'react';
import '../css/SponsorDetails.css';

function SponsorDetails(props) {
    const { name, role, jobId, description, requirements, prefered, timeslot1, recruiter1, timeslot2, recruiter2 } = props.sponsor;
    const requirementItems = requirements.split('.').filter(item => item.trim() !== '');
    const preferedItems = prefered.split('.').filter(item => item.trim() !== '');
    const [showMeetingInfo, setShowMeetingInfo] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleAppointmentClick = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // 2 seconds
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
                            <h4>{timeslot1}</h4>
                        </div>
                        <div className="interactionType">
                            <h3>Interaction Type</h3>
                            <h4>Zoom Meeting</h4>
                        </div>
                    </div>
                    <div className="rightInfo">
                        <div className="recruiterInfo">
                            <h3>Assigned Recruiter</h3>
                            <h4>{recruiter1}</h4>
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
                            <h4>{timeslot2}</h4>
                        </div>
                        <div className="interactionType">
                            <h3>Interaction Type</h3>
                            <h4>Zoom Meeting</h4>
                        </div>
                    </div>
                    <div className="rightInfo">
                        <div className="recruiterInfo">
                            <h3>Assigned Recruiter</h3>
                            <h4>{recruiter2}</h4>
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
        </div>
        
    );
}

export default SponsorDetails;
