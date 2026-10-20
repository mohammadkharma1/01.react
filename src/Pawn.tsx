import React from 'react';


type PawnProps = {
  color?: string;    
  position?: string; 
};

export default function Pawn(props: PawnProps) {
  
  let symbol = '♙';
  if (props.color === 'black') {
    symbol = '♟';
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
      <h2>{symbol} Position: {props.position}</h2>
      <p>Der Bauer kostet 1 Punkt</p>
    </div>
  );
}