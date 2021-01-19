import { React, useEffect, useState } from 'react';

function UserListComponent() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(`http://doudsystems.com/bcms/dsi/users`);
            const fetchedUsers = await response.json(response);
            setUsers(fetchedUsers);
        }
        fetchUsers();
    });
    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
            {users.map( (v,k) => {
                if(v.active)
                    return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.firstname} {v.lastname}</td>
                            <td>{v.username}</td>
                        </tr>
                    )
            })}  
            </tbody> 
        </table>
    )
}

export default UserListComponent;