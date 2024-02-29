import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cards } from "@/components/card/card";

export default function QuestListing() {
  // State to store the fetched data
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // Fetch data from localhost:8000/quest
    axios.get('http://127.0.0.1:8000/quest/')
      .then(response => {
        console.log(response.data);
        setQuests(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="flex justify-center flex-col gap-5">
      {quests.map(quest => (
        <Cards key={quest.quest_id} quest={quest} />
      ))}
    </div>
  );
}
