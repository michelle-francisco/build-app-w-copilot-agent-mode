import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-bassoon-5xjgqgwpp97cp7pv-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h1 className="card-title display-5 text-primary mb-4">Leaderboard</h1>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">User</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard && leaderboard.length > 0 ? leaderboard.map((entry, idx) => (
              <tr key={entry._id || idx}>
                <th scope="row">{idx + 1}</th>
                <td>{entry.user && entry.user.username ? entry.user.username : entry.user}</td>
                <td>{entry.score}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="3" className="text-center text-muted">No leaderboard data found.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" type="button">Refresh Leaderboard</button>
      </div>
    </div>
  );
}

export default Leaderboard;
