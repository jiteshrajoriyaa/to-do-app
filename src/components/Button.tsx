import React from 'react';

type ButtonProps = {
  label: string; // Text to display on the button
  onClick: () => void; // Function to execute on click
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" px-4 py-2 bg-green-600 text-customgreen font-semibold rounded hover:bg-green-800 transition duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
