import * as React from 'react';
import AvailabilityLabel from './AvailabilityLabel';
import { Manifestation, manifestationData } from './helper';
import './style.css';

console.log(manifestationData.length);
export default function App() {
  return (
    <div>
      {manifestationData.map(({ id, type }, i) => (
        <div>
          <h2>{i}</h2>
          <AvailabilityLabel key={id} id={id} type={type} />
        </div>
      ))}
    </div>
  );
}
