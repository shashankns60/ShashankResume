import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import EditableText from './EditableText';

export default function Header() {
  const { data, updateData } = useResume();
  const { header } = data;

  const updateHeader = (field: string, value: string) => {
    updateData('header', { ...header, [field]: value });
  };

  return (
    <motion.header 
      className="bg-white border-b"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1 
          className="text-4xl font-bold text-blue-900 mb-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <EditableText
            text={header.name}
            onSave={(value) => updateHeader('name', value)}
            className="text-4xl font-bold text-blue-900"
          />
        </motion.h1>
        <motion.h2 
          className="text-xl text-blue-600 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <EditableText
            text={header.title}
            onSave={(value) => updateHeader('title', value)}
            className="text-xl text-blue-600"
          />
        </motion.h2>
        <motion.div 
          className="flex flex-wrap gap-6 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <Phone className="text-blue-600" size={16} />
            <EditableText
              text={header.phone}
              onSave={(value) => updateHeader('phone', value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-blue-600" size={16} />
            <EditableText
              text={header.email}
              onSave={(value) => updateHeader('email', value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600" size={16} />
            <EditableText
              text={header.location}
              onSave={(value) => updateHeader('location', value)}
            />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}