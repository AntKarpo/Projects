import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

export default function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState(null); 

  
  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };

 
  const handleRemoveActivity = (idToRemove) => {
    setActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== idToRemove)
    );
  };


  useEffect(() => {

    fetch('https://api.exampleweather.com/weather')
      .then((response) => response.json())
      .then((data) => {
       
        setWeather(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  useEffect(() => {
    const storedActivities = JSON.parse(localStorage.getItem('activities'));
    if (storedActivities) {
      setActivities(storedActivities);
    }
  }, []);

  useEffect(() => {
  
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  return (
    <div className="App">

      {weather && (
        <div className="weather-info">
          <h2>
            Weather: {weather.condition} | Temperature: {weather.temperature}°C
          </h2>
        </div>
      )}

      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} onRemoveActivity={handleRemoveActivity} />
    </div>
  );
}


