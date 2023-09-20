import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import { uid } from 'uid';
import useLocalStorageState from 'use-local-storage-state';

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", { defaultValue: [] });
  const [weatherData, setWeatherData] = useState(null);

  const handleAddActivity = (newActivity) => {
    const newActivityWithId = { ...newActivity, id: uid() };
    setActivities((prevActivities) => [...prevActivities, newActivityWithId]);
  };

  const handleDeleteActivity = (sameId) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== sameId)
    );
  };

  useEffect(() => {
    fetchWeatherData();

    const intervalId = setInterval(fetchWeatherData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchWeatherData = () => {
    fetch('https://example-apis.vercel.app/api/weather')
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    
    <div className="App">
      {weatherData && (
        <div className="weather-info">
          <h2 className='emojiAndtemp'>{weatherData.condition} {weatherData.temperature}°C</h2>
        </div>
      )}
      <List activities={activities} onDeleteActivity={handleDeleteActivity} weatherCondition={weatherData} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
