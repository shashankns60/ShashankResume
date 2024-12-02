import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Save } from 'lucide-react';
import { useResume } from '../context/ResumeContext';

export default function EditToggle() {
  const { isEditing, toggleEditing, saveChanges } = useResume();

  return (
    <motion.div 
      className="fixed top-4 right-4 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={isEditing ? saveChanges : toggleEditing}
        className={`${
          isEditing ? 'bg-green-600' : 'bg-blue-600'
        } text-white px-4 py-2 rounded-full flex items-center gap-2`}
      >
        {isEditing ? (
          <>
            <Save size={20} />
            Save Changes
          </>
        ) : (
          <>
            <Edit size={20} />
            Edit Resume
          </>
        )}
      </motion.button>
    </motion.div>
  );
}