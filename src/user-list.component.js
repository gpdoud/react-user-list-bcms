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
        <div>
            <div>
                <label>User List</label>
                <span> | </span>
                <a href="#top">New</a>
            </div>
            <hr></hr>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.filter(v => v.active).map( (v,k) => 
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.firstname} {v.lastname}</td>
                        <td>{v.username}</td>
                        <td>{v.cellPhone}</td>
                        <td>{v.email}</td>
                        <td>{v.active ? 'Yes' : 'No'}</td>
                        <td>
                            <a href="#top">Detail</a>
                            <span> | </span>
                            <a href="#top">Edit</a>
                        </td>
                    </tr>
                )}  
                </tbody> 
            </table>
        </div>
    )
}

export default UserListComponent;