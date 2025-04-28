import React, { useState } from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Skills = () => {
  const skills = useFormDataStore((state) => state.skills);
  const addSkill = useFormDataStore((state) => state.addSkill);
  const removeSkill = useFormDataStore((state) => state.removeSkill);

  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      addSkill(input.trim());
      setInput('');
    }
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a skill"
          className="flex-grow px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{skill}</span>
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
