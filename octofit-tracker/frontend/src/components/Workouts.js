import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-bassoon-5xjgqgwpp97cp7pv-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h1 className="card-title display-5 text-primary mb-4">Workouts</h1>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Workout Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts && workouts.length > 0 ? workouts.map((workout, idx) => (
              <tr key={workout._id || idx}>
                <th scope="row">{idx + 1}</th>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">No workouts found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" type="button">Add New Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
