import React from 'react';

const UserAvatar = ({ user }) => (
  <img src={user.avatarURL} alt={user.id + ' avatar'} className="leaderboard__avatar" />
);

const LeaderboardTable = ({ users }) => (
  <table className="leaderboard centered">
    <thead>
      <tr>
        <th />
        <th>user</th>
        <th>questions created</th>
        <th>questions answered</th>
        <th>rank</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user.id}>
          <td>
            <UserAvatar user={user} />
          </td>
          <td>{user.id}</td>
          <td>{user.questions}</td>
          <td>{user.answers}</td>
          <td>{index + 1}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeaderboardTable;
