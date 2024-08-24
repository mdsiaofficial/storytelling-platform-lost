import React from 'react';

const Story = ({ text, choices, onChoice }) => {
  return (
    <div className="p-4">
      <p className="text-lg">{text}</p>
      <div className="mt-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
            onClick={() => onChoice(choice.next)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Story;