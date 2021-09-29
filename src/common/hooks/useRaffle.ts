import React, { useState } from 'react';

import prng from '../utils/prng';

type UsedIndices = {
  [s: string]: boolean;
};

type AssignedMap = {
  [s: string]: number;
};

const useRaffle = () => {
  const [data, setData] = useState<{
    size: number;
    count: number;
    usedIndices: UsedIndices;
    assignedMap: AssignedMap;
  }>({
    size: 0,
    count: 0,
    usedIndices: {},
    assignedMap: {},
  });

  const draw = (value: number, size: number, force: boolean = false): number => {
    const reset = force || data.size !== size;

    let randomValue = prng(size);

    const currentValue = data.assignedMap[value];

    while (!reset && data.usedIndices[randomValue]) randomValue = prng(size);

    const usedIndices: UsedIndices = {
      ...(!reset ? data.usedIndices : {}),
      [randomValue]: true,
    };

    const assignedMap: AssignedMap = {
      ...(!reset ? data.assignedMap : {}),
      [value]: randomValue,
    };

    if (!reset && typeof currentValue === 'number') {
      delete usedIndices[currentValue];
    }

    setData({
      size,
      count: Object.keys(usedIndices).length,
      usedIndices,
      assignedMap,
    });

    return randomValue;
  };

  return {
    draw,
    raffleData: data,
  };
};

export default useRaffle;
