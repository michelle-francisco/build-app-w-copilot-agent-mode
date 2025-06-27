import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-bassoon-5xjgqgwpp97cp7pv-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h1 className="card-title display-5 text-primary mb-4">Users</h1>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? users.map((user, idx) => (
              <tr key={user._id || idx}>
                <th scope="row">{idx + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" type="button">Add New User</button>
      </div>
    </div>
  );
}

export default Users;
