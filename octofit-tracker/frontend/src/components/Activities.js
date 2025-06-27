import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-bassoon-5xjgqgwpp97cp7pv-8000.app.github.dev/api/activity/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h1 className="card-title display-5 text-primary mb-4">Activities</h1>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Type</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities && activities.length > 0 ? activities.map((activity, idx) => (
              <tr key={activity._id || idx}>
                <th scope="row">{idx + 1}</th>
                <td>{activity.user_email || activity.user}</td>
                <td>{activity.activity_type || activity.type}</td>
                <td>{activity.duration}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">No activities found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" type="button">Log New Activity</button>
      </div>
    </div>
  );
}

export default Activities;
