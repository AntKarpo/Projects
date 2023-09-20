import React from 'react';

export default function List({ activities,  onDeleteActivity }) {
  return (
    <div className="activity-list">
      <h2>Activity List</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.name}</strong>
            <p>{activity.isForGoodWeather ? 'Good Weather' : 'Bad Weather'}</p>
            <button onClick={() => onDeleteActivity(activity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


