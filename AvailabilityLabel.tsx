import * as React from 'react';
// import { Manifestation } from './helper';

const AvailabilityLabel = ({ id, type }: { id: unknown; type: unknown }) => {
  console.log('rendering AvailabilityLabel');
  const isAvailable = true;
  // const { isAvailable } = useAvailabilityData({ id });
  return (
    <dl>
      <dt>Type</dt>
      <dd>{type}</dd>
      <dt>Status</dt>
      <dd>{isAvailable ? 'Available' : 'Unavailable'}</dd>
    </dl>
  );
};

export default AvailabilityLabel;
