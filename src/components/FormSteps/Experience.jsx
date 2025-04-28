import React, { useState } from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Experience = () => {
  const experience = useFormDataStore((state) => state.experience);
  const addExperience = useFormDataStore((state) => state.addExperience);
  const updateExperience = useFormDataStore((state) => state.updateExperience);
  const removeExperience = useFormDataStore((state) => state.removeExperience);

  const [newExp, setNewExp] = useState({
    title: '',
    role: '',
    location: '',
    years: '',
    bullets: [''],
  });

  const handleChange = (e) => {
    setNewExp({ ...newExp, [e.target.name]: e.target.value });
  };

  const handleBulletChange = (i, value) => {
    const updated = [...newExp.bullets];
    updated[i] = value;
    setNewExp({ ...newExp, bullets: updated });
  };

  const addBullet = () => {
    setNewExp({ ...newExp, bullets: [...newExp.bullets, ''] });
  };

  const removeBullet = (i) => {
    setNewExp({ ...newExp, bullets: newExp.bullets.filter((_, idx) => idx !== i) });
  };

  const handleAdd = () => {
    if (newExp.title.trim() !== '') {
      addExperience({ ...newExp, bullets: newExp.bullets.filter(b => b.trim() !== '') });
      setNewExp({ title: '', role: '', location: '', years: '', bullets: [''] });
    }
  };

  const handleUpdate = (index, field, value) => {
    const updated = { ...experience[index], [field]: value };
    updateExperience(index, updated);
  };

  const handleUpdateBullet = (expIndex, bulletIndex, value) => {
    const exp = experience[expIndex];
    const updatedBullets = [...(exp.bullets || [])];
    updatedBullets[bulletIndex] = value;
    handleUpdate(expIndex, 'bullets', updatedBullets);
  };

  const addExpBullet = (expIndex) => {
    const exp = experience[expIndex];
    handleUpdate(expIndex, 'bullets', [...(exp.bullets || []), '']);
  };

  const removeExpBullet = (expIndex, bulletIndex) => {
    const exp = experience[expIndex];
    handleUpdate(expIndex, 'bullets', exp.bullets.filter((_, idx) => idx !== bulletIndex));
  };

  return (
    <div>
      <div className="mb-4 space-y-2">
        <input type="text" name="title" placeholder="Title" value={newExp.title} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="role" placeholder="Role" value={newExp.role} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="location" placeholder="Location" value={newExp.location} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <input type="text" name="years" placeholder="Years" value={newExp.years} onChange={handleChange} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        <div className="space-y-1">
          {newExp.bullets.map((b, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input type="text" value={b} onChange={e => handleBulletChange(i, e.target.value)} placeholder={`Bullet ${i + 1}`} className="flex-grow px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
              <button type="button" onClick={() => removeBullet(i)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
            </div>
          ))}
          <button type="button" onClick={addBullet} className="px-2 py-1 bg-blue-500 text-white rounded">Add Bullet</button>
        </div>
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded">Add Experience</button>
      </div>
      <ul className="space-y-4">
        {experience.map((exp, index) => (
          <li key={index} className="border p-3 rounded dark:border-gray-600">
            <input type="text" value={exp.title} onChange={e => handleUpdate(index, 'title', e.target.value)} placeholder="Title" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={exp.role} onChange={e => handleUpdate(index, 'role', e.target.value)} placeholder="Role" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={exp.location} onChange={e => handleUpdate(index, 'location', e.target.value)} placeholder="Location" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <input type="text" value={exp.years} onChange={e => handleUpdate(index, 'years', e.target.value)} placeholder="Years" className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white" />
            <div className="space-y-1">
              {(exp.bullets || []).map((b, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <input type="text" value={b} onChange={e => handleUpdateBullet(index, i, e.target.value)} placeholder={`Bullet ${i + 1}`} className="flex-grow px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
                  <button type="button" onClick={() => removeExpBullet(index, i)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                </div>
              ))}
              <button type="button" onClick={() => addExpBullet(index)} className="px-2 py-1 bg-blue-500 text-white rounded">Add Bullet</button>
            </div>
            <button onClick={() => removeExperience(index)} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience; 