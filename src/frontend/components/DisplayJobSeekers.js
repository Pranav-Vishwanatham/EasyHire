import React, { useState, useEffect } from "react";

// const fetchJobSeekers = async () => {
//     try {
//         const response = await fetch('/api/jobSeekers', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });

//         if (response.ok) {
//             const userData = await response.json();
//             alert(`Fetch Successful`);
//             console.log(response.json());
//         } else {
//             const errorMessage = await response.text();
//             alert(`Error: ${errorMessage}`);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

const DisplayJobSeekers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/jobSeekers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
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
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {/* Render user data here */}
                        <p>Name: {user.firstName}</p>
                        <p>Email: {user.email}</p>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayJobSeekers;