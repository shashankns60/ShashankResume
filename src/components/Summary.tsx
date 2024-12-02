import React from 'react';
import { useResume } from '../context/ResumeContext';
import EditableText from './EditableText';

export default function Summary() {
  const { data, updateData } = useResume();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">SUMMARY</h2>
      <EditableText
        text={data.summary}
        onSave={(value) => updateData('summary', value)}
        multiline
        className="text-gray-700 leading-relaxed"
      />
    </section>
  );
}