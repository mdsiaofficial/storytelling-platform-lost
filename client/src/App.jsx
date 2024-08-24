import React, { useState } from 'react';
import Story from './components/Story';
import './App.css'
import logo from './assets/story.png'
import data from './data/story.json'
const stories = data;

const App = () => {
  const [currentStory, setCurrentStory] = useState(stories[0]);
  const [storyHistory, setStoryHistory] = useState([]);

  const handleChoice = (nextId) => {
    const nextStory = stories.find(story => story.id === nextId);
    setStoryHistory([...storyHistory, currentStory]); // Track previous story
    setCurrentStory(nextStory);
    // Scroll to bottom after adding a new story
    const historyElement = document.querySelector('.story-history');
    if (historyElement) {
      historyElement.scrollTop = historyElement.scrollHeight;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col justify-center items-center">
      <img src={logo} alt="" className='h-16 w-16'/>
      <h1 className="text-2xl font-bold text-center mb-4">The Lost Treasure</h1>

      {/* Display previous stories */}
      <div className="mb-4 story-history">
        <h2 className="text-lg font-semibold">Previous Choices:</h2>
        <ul className="list-disc list-inside">
          {storyHistory.map((story, index) => (
            <li key={index}>{story.text}</li>
          ))}
        </ul>
      </div>

      <Story text={currentStory.text} choices={currentStory.choices} onChoice={handleChoice} />
    </div>
  );
};

export default App;