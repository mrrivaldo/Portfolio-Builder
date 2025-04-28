import React from 'react';
import { useFormDataStore } from '../../contexts/FormDataContext';

const Bio = () => {
  const bio = useFormDataStore((state) => state.bio);
  const setBio = useFormDataStore((state) => state.setBio);

  const handleChange = (e) => {
    setBio({
      ...bio,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={bio.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={bio.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={bio.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={bio.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={bio.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={bio.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>
    </div>
  );
};

export default Bio;
