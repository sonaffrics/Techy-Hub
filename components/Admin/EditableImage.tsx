import React, { useState } from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  onSave: (newSrc: string) => void;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, alt, onSave, className }) => {
  const [editing, setEditing] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleBlur = () => {
    setEditing(false);
    if (currentSrc !== src) {
      onSave(currentSrc);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleBlur();
    } else if (event.key === 'Escape') {
      setCurrentSrc(src); // Revert
      setEditing(false);
    }
  };

  return (
    <div className={`editable-image-wrapper relative ${className}`}>
      {editing ? (
        <input
          type="text"
          value={currentSrc}
          onChange={(e) => setCurrentSrc(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-mb-text bg-white"
          autoFocus
          placeholder="Enter image URL"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-cover cursor-pointer border-2 border-transparent hover:border-blue-400 ${className || ''}`}
          onClick={() => setEditing(true)}
        />
      )}
      {editing && (
        <p className="absolute -bottom-6 left-0 text-xs text-gray-600">Enter URL (e.g., picsum.photos/...) and press Enter</p>
      )}
    </div>
  );
};

export default EditableImage;