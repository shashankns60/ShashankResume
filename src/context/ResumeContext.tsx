import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ResumeContextType {
  data: any;
  updateData: (section: string, newData: any) => void;
  isEditing: boolean;
  toggleEditing: () => void;
  saveChanges: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

const initialData = {
  header: {
    name: "SHASHANK CHAUDHARY",
    title: "Front End Developer",
    phone: "+91-7458899677 | 9115490670",
    email: "shashank.chaudhary3991@gmail.com",
    location: "Bangalore, KA 560102"
  },
  summary: `I'm an experienced Front-End Developer with expertise in creating responsive, user-friendly websites 
    that drive engagement and achieve business goals. Skilled in HTML, CSS, JavaScript, Laravel, Bootstrap, 
    and SEO, I have delivered successful projects across education, hospitality, and technology domains. 
    I excel in debugging, optimizing for search engines, and collaborating in teams to ensure seamless 
    functionality and impactful results.`,
  // ... other sections will be added as needed
};

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const updateData = (section: string, newData: any) => {
    setData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  const toggleEditing = () => {
    setIsEditing(prev => !prev);
  };

  const saveChanges = () => {
    // Here you could implement saving to localStorage or an API
    localStorage.setItem('resumeData', JSON.stringify(data));
    setIsEditing(false);
  };

  return (
    <ResumeContext.Provider value={{ data, updateData, isEditing, toggleEditing, saveChanges }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}