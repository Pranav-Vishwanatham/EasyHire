import React, { useState } from 'react';
import '../css/Meetings.css';

const initialMeetings = [
    { title: 'Meeting with Pranav Vishwanatham', time: '12/20/2023 2:00 PM EDT', email: 'pranav0909@vt.edu', link: 'https://zoom.us/j/98776825185', passcode: '487044' },
    { title: 'Meeting with Sushma Deegoju', time: '12/22/2023 12:30 PM EDT', email: 'sushmad@vt.edu', link: 'https://zoom.us/j/98776825185', passcode: '948145'},
    { title: 'Meeting with Rishith Gandham', time: '12/10/2023 3:00 PM EDT', email: 'rishithg@vt.edu', link: 'https://zoom.us/j/98776825185', passcode: '780012' },
    { title: 'Meeting with Gayathri Pendyala', time: '12/08/2023 10:30 AM EDT', email: 'gayathripendyala@vt.edu', link: 'https://zoom.us/j/98776825185', passcode: '672189' },
    { title: 'Meeting with Vineela Yerrabelli', time: '12/04/2023 1:00 PM EDT', email: 'Vineela.y@vt.edu', link: 'https://zoom.us/j/98776825185', passcode: '567324' },
  ];

const Meeting = ({ title, time, email, link, passcode, onCancel }) => (
  <div className="meeting">
    <div className="meeting-info">
      <div className="meeting-title">{title}</div>
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
