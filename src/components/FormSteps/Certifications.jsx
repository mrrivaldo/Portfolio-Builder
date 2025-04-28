import React, { useState } from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Certifications = () => {
  const certifications = useFormDataStore((state) => state.certifications);
  const addCertification = useFormDataStore((state) => state.addCertification);
  const removeCertification = useFormDataStore((state) => state.removeCertification);

  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      addCertification(input.trim());
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
          placeholder="Add a certification"
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
        {certifications.map((cert, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{cert}</span>
            <button
              onClick={() => removeCertification(index)}
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

export default Certifications; 