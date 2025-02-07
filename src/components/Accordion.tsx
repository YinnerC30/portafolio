import React, { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <button
          type="button"
          className="cursor-pointer flex gap-2 items-center justify-between hover:underline hover:underline-offset-4 w-auto my-2"
        >
          <span className='hover:text-blue-500'>{ isOpen ? 'Ocultar' : title}</span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && <div className="accordion-content bg-slate-700 p-5 rounded-md">{children}</div>}
    </div>
  );
};

export default Accordion;
