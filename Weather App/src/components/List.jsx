import './List.css';
import { uid } from 'uid';

export default function List({ activities, onDeleteActivity, weatherCondition }) {
  const isGoodWeather = weatherCondition?.isGoodWeather;

  const filteredActivities = activities.filter((activity) => {
  
    if (isGoodWeather && activity.isForGoodWeather) {
      return true;
    }
    
    if (!isGoodWeather && !activity.isForGoodWeather) {
      return true;
    }

    return false;
  });

  let weatherLabel = weatherCondition?.isGoodWeather ? 'Good Weather' : 'Bad Weather';

console.log(weatherCondition);

  return (
    <div className="activity-list">
      <h5>Activity List for {weatherLabel}</h5>
      <ul>
        {filteredActivities.map((activity) => (
          <li className='addedActivity' key={uid()}>
            <strong>{activity.name}</strong>
            <button className='buttonDelete' onClick={() => onDeleteActivity(activity.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
