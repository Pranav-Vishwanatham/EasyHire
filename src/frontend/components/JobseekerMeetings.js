import React, { useState } from 'react';
import '../css/Meetings.css';

const initialMeetings = [
    { title: 'Meeting with Chandralekha Kommana', company:'Amazon', time: '12/20/2023 2:00 PM EDT', email: 'chandralekha@amazon.com', link: 'https://zoom.us/j/98776825185', passcode: '487044' },
    { title: 'Meeting with John Sable', company:'Dice', time: '18/20/2023 12:00 PM EDT', email: 'sablejohn@dice.com', link: 'https://zoom.us/j/98776825185', passcode: '803421' },
    { title: 'Meeting with Sai Kiran Reddy Ramacharla', company:'American Express', time: '12/22/2023 12:30 PM EDT', email: 'saikiran@amex.com', link: 'https://zoom.us/j/98776825185', passcode: '948145'},
    { title: 'Meeting with Karen', company:'Adobe', time: '19/01/2024 1:30 PM EDT', email: 'karen@adobe.com', link: 'https://zoom.us/j/98776825185', passcode: '678120'},
  ];

const Meeting = ({ title, company, time, email, link, passcode, onCancel }) => (
  <div className="meeting">
    <div className="meeting-info">
      <div className="meeting-title">{title} / <a href="#">{company} </a></div>
      <div className="meeting-details">
        {time} / <a href={`mailto:${email}`}>{email}</a> <br></br><br></br>
        Join <a href={link} className="meeting-link" target="_blank" rel="noopener noreferrer">Zoom Meeting</a> &nbsp;&nbsp;
        Passcode: {passcode}
        <button className="cancel-button" onClick={onCancel}>Cancel Meeting</button>
      </div>
    </div>
  </div>
);

const MeetingsList = () => {
  const [meetings, setMeetings] = useState(initialMeetings);

  const cancelMeeting = index => {
    const newMeetings = meetings.filter((_, i) => i !== index);
    setMeetings(newMeetings);
  };

  return (
    <div className="meetings">
      <h1>My Meetings</h1>
      <p>View and Edit your personal meetings. <a href="#">Learn More</a></p>
      <div className="meetings-list">
        {meetings.map((meeting, index) => (
          <Meeting key={index} {...meeting} onCancel={() => cancelMeeting(index)} />
        ))}
      </div>
    </div>
  );
};

export default MeetingsList;
