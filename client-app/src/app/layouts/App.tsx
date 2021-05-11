import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((res) => {
      setActivities(res.data);
    })
  }, [])


  return (
    <div>
      <NavBar />


      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>

    </div>
  );
}

export default App;
