import React, { useState } from 'react';
import Bio from './FormSteps/Bio';
import Skills from './FormSteps/Skills';
import Projects from './FormSteps/Projects';
import Education from './FormSteps/Education';
import Certifications from './FormSteps/Certifications';
import Experience from './FormSteps/Experience';

const steps = [
  { id: 1, component: Bio, label: 'Bio' },
  { id: 2, component: Education, label: 'Education' },
  { id: 3, component: Certifications, label: 'Certifications' },
  { id: 4, component: Experience, label: 'Experience' },
  { id: 5, component: Skills, label: 'Skills' },
  { id: 6, component: Projects, label: 'Projects' },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const StepComponent = steps.find((step) => step.id === currentStep)?.component;

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <div className="mb-4">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(step.id)}
            className={`mr-2 px-3 py-1 rounded ${
              currentStep === step.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>
      <div>
        {StepComponent && <StepComponent />}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
