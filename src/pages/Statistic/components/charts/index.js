import React from 'react';
import { Chart } from 'react-charts';
import { StyledChart } from './styled';

function StatChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <StyledChart>
      <Chart data={data} axes={axes} />
    </StyledChart>
  );
}

export default StatChart;
