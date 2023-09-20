import { useState } from 'react';

import './Form.css';

export default function Form({ onAddActivity}) {
  const [activityData, setActivityData] = useState({
    name: '',
    isForGoodWeather: false,
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
    });

    setActivityData({
      name: '',
      isForGoodWeather: false,
    });
    document.getElementById('activityName').focus();
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
        <label htmlFor="activityName">Name of Activity:
        <input type="text" id="activityName" name="name" value={activityData.name} onChange={handleChange} required/>
        </label><br/>
        <label htmlFor='isForGoodWeather'>Is it for good weather?
          <input type="checkbox" id='isForGoodWeather' name="isForGoodWeather" checked={activityData.isForGoodWeather} onChange={handleChange}/>
        </label><br/>
        <button className='buttonAdd' type="submit">Add Activity</button>
    </form>
  );
}
