import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MultiStepForm from './components/MultiStepForm';
import LivePreview from './components/LivePreview';
import ThemeSwitcher from './components/ThemeSwitcher';
import DownloadPDFButton from './components/DownloadPDFButton';
import { useFormDataStore } from './contexts/FormDataContext';
import { mockBio, mockSkills, mockProjects } from './utils/mockData';

const App = () => {
  const setBio = useFormDataStore((state) => state.setBio);
  const setSkills = useFormDataStore((state) => state.setSkills);
  const setProjects = useFormDataStore((state) => state.setProjects);

  useEffect(() => {
    setBio(mockBio);
    setSkills(mockSkills);
    setProjects(mockProjects);
  }, [setBio, setSkills, setProjects]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <header className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-2xl font-bold">Portfolio Builder</h1>
          <div className="flex space-x-4">
            <ThemeSwitcher />
            <DownloadPDFButton />
          </div>
        </header>
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <MultiStepForm />
          <div id="live-preview">
            <LivePreview />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
