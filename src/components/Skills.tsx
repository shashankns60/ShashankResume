import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Canva', category: 'tools' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Debugging', category: 'development' },
  { name: 'Responsive Design', category: 'frontend' },
  { name: 'Google Adsense', category: 'marketing' },
  { name: 'HTML', category: 'frontend' },
  { name: 'GMB Listing', category: 'marketing' },
  { name: 'SEO', category: 'marketing' },
  { name: 'Wix', category: 'tools' },
  { name: 'Google Search Console', category: 'marketing' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Laravel', category: 'backend' },
  { name: 'Photoshop', category: 'tools' },
  { name: 'WordPress', category: 'cms' }
];

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2">SKILLS</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill.name}
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm cursor-pointer hover:bg-blue-50"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}