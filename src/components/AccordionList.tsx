import type React from 'react';

export const AccordionList: React.FC<{ list: string[] }> = ({ list = [] }) => {
  return (
    <ul key={list.length}>
      {list.map((item: string) => (
        <li key={item} className="list-disc ml-10">
          {item}
        </li>
      ))}
    </ul>
  );
};
