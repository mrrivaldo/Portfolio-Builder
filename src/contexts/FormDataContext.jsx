import create from 'zustand';

export const useFormDataStore = create((set) => ({
  bio: {
    name: '',
    title: '',
    description: '',
    address: '',
    email: '',
    phone: '',
  },
  skills: [],
  projects: [],
  education: [],
  certifications: [],
  experience: [],
  setBio: (bio) => set({ bio }),
  addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
  removeSkill: (index) =>
    set((state) => ({
      skills: state.skills.filter((_, i) => i !== index),
    })),
  setSkills: (skills) => set({ skills }),
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (index, project) =>
    set((state) => ({
      projects: state.projects.map((p, i) => (i === index ? project : p)),
    })),
  removeProject: (index) =>
    set((state) => ({
      projects: state.projects.filter((_, i) => i !== index),
    })),
  setProjects: (projects) => set({ projects }),
  setEducation: (education) => set({ education }),
  addEducation: (edu) => set((state) => ({ education: [...state.education, edu] })),
  updateEducation: (index, edu) => set((state) => ({ education: state.education.map((e, i) => (i === index ? edu : e)) })),
  removeEducation: (index) => set((state) => ({ education: state.education.filter((_, i) => i !== index) })),
  setCertifications: (certifications) => set({ certifications }),
  addCertification: (cert) => set((state) => ({ certifications: [...state.certifications, cert] })),
  removeCertification: (index) => set((state) => ({ certifications: state.certifications.filter((_, i) => i !== index) })),
  setExperience: (experience) => set({ experience }),
  addExperience: (exp) => set((state) => ({ experience: [...state.experience, exp] })),
  updateExperience: (index, exp) => set((state) => ({ experience: state.experience.map((e, i) => (i === index ? exp : e)) })),
  removeExperience: (index) => set((state) => ({ experience: state.experience.filter((_, i) => i !== index) })),
}));
