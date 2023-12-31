import { Data } from 'plotly.js';

export const DATA_1: Data[] = [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter',
  },
  {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter',
  },
  {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter',
  },
];

export const DATA_2: Data[] = [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'lines+markers',
    type: 'scatter',
  },
  {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'markers',
    type: 'scatter',
  },
  {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter',
  },
];
