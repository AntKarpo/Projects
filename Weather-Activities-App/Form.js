import React, { useState } from 'react';

export default function Form({ onAddActivity }) {
  const [activityData, setActivityData] = useState({
    condition: '',
    isGoodWeather: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setActivityData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    onAddActivity({
      ...activityData,
      id: generateUniqueId(), 
    });

    setActivityData({
     condition: '',
      isGoodWeather: false,
    });
  
    document.getElementById('activityName').focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
        <label htmlFor="activityName">Name of Activity:</label><br/>
        <input type="text" id="activityName" name="name" value={activityData.condition} onChange={handleChange} required/>
       
        <label>Is it for good weather?
          <input type="checkbox" name="isGoodWeather" checked={activityData.isGoodWeather} onChange={handleChange}/>
        </label>
        <button type="submit">Add Activity</button>
    </form>
  );
}

