import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import ShareButtons from './components/ShareButtons';
import EditToggle from './components/EditToggle';
import { ResumeProvider } from './context/ResumeContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function App() {
  return (
    <ResumeProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <EditToggle />
        <motion.main 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={sectionVariants}>
                <Summary />
                <Experience />
                <Projects />
              </motion.div>
              <motion.div variants={sectionVariants}>
                <Skills />
                <Education />
                <Certifications />
                <Languages />
              </motion.div>
            </div>
          </div>
        </motion.main>
        <ShareButtons />
      </div>
    </ResumeProvider>
  );
}

export default App;