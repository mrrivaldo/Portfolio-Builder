import React, { useState } from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Education = () => {
  const education = useFormDataStore((state) => state.education);
  const addEducation = useFormDataStore((state) => state.addEducation);
  const updateEducation = useFormDataStore((state) => state.updateEducation);
  const removeEducation = useFormDataStore((state) => state.removeEducation);

  const [newEdu, setNewEdu] = useState({
    school: '',
    major: '',
    gpa: '',
    location: '',
    years: '',
  });

  const handleChange = (e) => {
    setNewEdu({ ...newEdu, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newEdu.school.trim() !== '') {
      addEducation(newEdu);
      setNewEdu({ school: '', major: '', gpa: '', location: '', years: '' });
    }
  };

  const handleUpdate = (index, field, value) => {
    const updated = { ...education[index], [field]: value };
    updateEducation(index, updated);
  };

  return (
    <div>
      <div className="mb-4 space-y-2">
        <input type="text" name="school" placeholder="School" value={newEdu.school} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="major" placeholder="Major" value={newEdu.major} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="gpa" placeholder="GPA" value={newEdu.gpa} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="location" placeholder="Location" value={newEdu.location} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="years" placeholder="Years" value={newEdu.years} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Education</button>
      </div>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="border p-3 rounded dark:border-gray-600">
            <input type="text" value={edu.school} onChange={e => handleUpdate(index, 'school', e.target.value)} placeholder="School" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={edu.major} onChange={e => handleUpdate(index, 'major', e.target.value)} placeholder="Major" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={edu.gpa} onChange={e => handleUpdate(index, 'gpa', e.target.value)} placeholder="GPA" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={edu.location} onChange={e => handleUpdate(index, 'location', e.target.value)} placeholder="Location" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={edu.years} onChange={e => handleUpdate(index, 'years', e.target.value)} placeholder="Years" className="w-full px-2 py-1 dark:bg-gray-700 dark:text-white" />
            <button onClick={() => removeEducation(index)} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education; 