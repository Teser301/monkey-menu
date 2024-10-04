import React from "react";

interface formProps {
  label: string;
  type: string;
}

const Input: React.FC<formProps> = ({ label, type }) => {
  const formattedLabel = label.replace(/\s+/g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
  return (
    <label className="flex flex-col mb-4">
      <span className="text-white mb-1">{label}</span>
      <input
        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        name={formattedLabel}
        type={type}
        required
      />
    </label>
  );
};

export default Input;
