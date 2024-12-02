import React, { useState, useEffect } from 'react';
import { useResume } from '../context/ResumeContext';

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  multiline?: boolean;
  className?: string;
}

export default function EditableText({ text, onSave, multiline = false, className = '' }: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const { isEditing: globalEditing } = useResume();

  useEffect(() => {
    setEditedText(text);
  }, [text]);

  if (!globalEditing) {
    return <span className={className}>{text}</span>;
  }

  if (multiline) {
    return (
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onBlur={() => onSave(editedText)}
        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        rows={3}
      />
    );
  }

  return (
    <input
      type="text"
      value={editedText}
      onChange={(e) => setEditedText(e.target.value)}
      onBlur={() => onSave(editedText)}
      className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}