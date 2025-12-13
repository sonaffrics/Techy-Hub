import React, { useState } from 'react';

interface EditableTextProps {
  value: string;
  onSave: (newValue: string) => void;
  tag?: React.ElementType; // e.g., 'h1', 'p', 'span'
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ value, onSave, tag: Tag = 'p', className }) => {
  const [editing, setEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    if (currentValue !== value) {
      onSave(currentValue);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) { // Allow Shift+Enter for new lines in textarea
      event.preventDefault();
      handleBlur();
    } else if (event.key === 'Escape') {
      setCurrentValue(value); // Revert
      setEditing(false);
    }
  };

  return (
    <div className={`editable-text-wrapper ${className}`}>
      {editing ? (
        Tag === 'textarea' ? ( // Special handling for textarea
          <textarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-mb-text bg-white"
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-mb-text bg-white"
            autoFocus
          />
        )
      ) : (
        <Tag
          className={`cursor-pointer hover:border-b-2 hover:border-blue-400 p-1 -m-1 ${className || ''}`}
          onClick={() => setEditing(true)}
        >
          {value}
        </Tag>
      )}
    </div>
  );
};

export default EditableText;