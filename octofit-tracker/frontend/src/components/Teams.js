import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-bassoon-5xjgqgwpp97cp7pv-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h1 className="card-title display-5 text-primary mb-4">Teams</h1>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team Name</th>
              <th scope="col">Members</th>
            </tr>
          </thead>
          <tbody>
            {teams && teams.length > 0 ? teams.map((team, idx) => (
              <tr key={team._id || idx}>
                <th scope="row">{idx + 1}</th>
                <td>{team.name}</td>
                <td>
                  {team.members && team.members.length > 0 ? (
                    <ul className="list-unstyled mb-0">
                      {team.members.map((member, mIdx) => (
                        <li key={mIdx} className="badge bg-secondary me-1 mb-1">{member.username || member}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-muted">No members</span>
                  )}
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">No teams found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" type="button">Create New Team</button>
      </div>
    </div>
  );
}

export default Teams;
