import React from 'react';
import { useAppContext } from '../../App';
import { ThemeConfig } from '../../types';

const colorOptions = [
  { name: 'Primary Blue', class: 'bg-mb-primary', text: 'text-mb-primary' },
  { name: 'Accent Cyan', class: 'bg-mb-accent', text: 'text-mb-accent' },
  { name: 'CTA Green', class: 'bg-mb-cta-green', text: 'text-mb-cta-green' },
  { name: 'Dark Grey', class: 'bg-mb-dark-bg', text: 'text-mb-dark-bg' },
  { name: 'Light Grey', class: 'bg-mb-light-bg', text: 'text-mb-light-bg' },
  // Add more color options here for full customizability
];

const fontOptions = [
  { name: 'Sans Serif (Inter)', class: 'font-sans' },
  { name: 'Serif (Georgia)', class: 'font-serif' },
];

const ThemeCustomizer: React.FC = () => {
  const { theme, updateTheme } = useAppContext();

  const handleColorChange = (key: keyof ThemeConfig, newClass: string) => {
    updateTheme({ [key]: newClass });
  };

  const handleFontChange = (key: keyof ThemeConfig, newClass: string) => {
    updateTheme({ [key]: newClass });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-mb-text">Theme Customization</h2>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">Primary Color:</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 ${color.class} ${theme.primaryColorClass === color.class ? 'border-mb-accent' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mb-primary`}
              onClick={() => handleColorChange('primaryColorClass', color.class)}
              title={color.name}
              aria-label={`Set primary color to ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">Accent Color:</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 ${color.class} ${theme.accentColorClass === color.class ? 'border-mb-accent' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mb-accent`}
              onClick={() => handleColorChange('accentColorClass', color.class)}
              title={color.name}
              aria-label={`Set accent color to ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">CTA Button Color:</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 ${color.class} ${theme.ctaButtonClass.includes(color.class) ? 'border-mb-accent' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mb-cta-green`}
              onClick={() => handleColorChange('ctaButtonClass', `${color.class} text-white hover:brightness-110`)}
              title={color.name}
              aria-label={`Set CTA button color to ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">Text Color:</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 ${color.class} ${theme.textColorClass.includes(color.text) ? 'border-mb-accent' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
              onClick={() => handleColorChange('textColorClass', color.text)}
              title={color.name}
              aria-label={`Set text color to ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">Background Color:</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 ${color.class} ${theme.backgroundColorClass === color.class ? 'border-mb-accent' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100`}
              onClick={() => handleColorChange('backgroundColorClass', color.class)}
              title={color.name}
              aria-label={`Set background color to ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-mb-text text-sm font-bold mb-2">Primary Font:</label>
        <select
          value={theme.primaryFontClass}
          onChange={(e) => handleFontChange('primaryFontClass', e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mb-primary bg-white text-mb-text"
        >
          {fontOptions.map((font) => (
            <option key={font.name} value={font.class} className={font.class}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeCustomizer;