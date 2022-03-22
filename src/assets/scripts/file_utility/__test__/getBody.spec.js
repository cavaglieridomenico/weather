import { getBody } from '../file_utility';

const arrayTable = [
  'Dy MxT   MnT   AvT',
  '',
  '1  88    59    74',
  '2  79    63    71',
  '3  77    55    66',
];

test(`It should return an an array of valid string arrays:
 row fields of a table, without Header`, () => {
  expect(getBody(arrayTable)).toEqual([
    [],
    ['1', '88', '59', '74'],
    ['2', '79', '63', '71'],
    ['3', '77', '55', '66'],
  ]);
});
