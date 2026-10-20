import React from 'react';


type ListProps = {
  items: any[]; 
  title?: string;
};

export default function List(props: ListProps) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ol>
        {props.items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}