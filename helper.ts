import { useEffect, useState } from 'react';

export type Manifestation = { id: string; type: 'ebog' | 'bog' | 'dvd' };

export const manifestationData: Manifestation[] = [
  { id: 'ab3248x', type: 'ebog' },
  { id: '3dh4223', type: 'bog' },
  { id: 'se34j2r', type: 'dvd' },
];

const fakeAvailabilityData = {
  ab3248x: true,
  '3dh4223': false,
  se34j2r: true,
};

export const useAvailabilityData = ({ id }: { id: string }) => {
  const [isAvailable, setIsAvailable] = useState<boolean>(null);
  console.log(isAvailable);
  useEffect(() => {
    if (isAvailable === null) {
      const status = fakeAvailabilityData[id];
      console.log('is setting');
      setIsAvailable(status);
    }
  }, [isAvailable]);
  // if (isAvailable === null) {
  //   const status = fakeAvailabilityData[id];
  //   setIsAvailable(status);
  // }

  return { isAvailable };
};
