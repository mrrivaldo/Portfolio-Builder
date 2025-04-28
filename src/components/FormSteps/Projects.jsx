import React, { useState } from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Projects = () => {
  const projects = useFormDataStore((state) => state.projects);
  const addProject = useFormDataStore((state) => state.addProject);
  const updateProject = useFormDataStore((state) => state.updateProject);
  const removeProject = useFormDataStore((state) => state.removeProject);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    link: '',
  });

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (newProject.name.trim() !== '') {
      addProject(newProject);
      setNewProject({ name: '', description: '', link: '' });
    }
  };

  const handleUpdate = (index, field, value) => {
    const updatedProject = { ...projects[index], [field]: value };
    updateProject(index, updatedProject);
  };

  return (
    <div>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={newProject.link}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Project
        </button>
      </div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border p-3 rounded dark:border-gray-600">
            <input
              type="text"
              value={project.name}
              onChange={(e) => handleUpdate(index, 'name', e.target.value)}
              className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white"
            />
            <textarea
              value={project.description}
              onChange={(e) => handleUpdate(index, 'description', e.target.value)}
              rows={2}
              className="w-full px-2 py-1 border-b mb-1 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="text"
              value={project.link}
              onChange={(e) => handleUpdate(index, 'link', e.target.value)}
              className="w-full px-2 py-1 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => removeProject(index)}
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
