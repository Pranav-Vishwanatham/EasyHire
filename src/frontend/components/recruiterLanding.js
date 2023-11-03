import React, { useState, useEffect } from "react";
import "../css/recruiterLanding.css";

const DisplayJobSeekers = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/jobSeekers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUsers(userData); // Update the state with the fetched data
      } else {
        const errorMessage = await response.text();
        alert(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   return (
  //     <div class="recruiter-container">
  //       <h1>User List</h1>
  //       <ul>
  //         {users.map((user, index) => (
  //           <li key={index}>
  //             {/* Render user data here */}
  //             <p>Name: {user.firstName}</p>
  //             <p>Email: {user.email}</p>
  //             <p>phone: {user.phone}</p>
  //             {/* Add more details as needed */}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <div className="recruiter-container">
      <h1>User Details</h1>
      {users.length > 0 && (
        <div className="user-card">
          <p>Name: {users[currentIndex].firstName}</p>
          <p>Email: {users[currentIndex].email}</p>
          <p>Phone: {users[currentIndex].phone}</p>
          <div className="card-navigation">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === users.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayJobSeekers;
