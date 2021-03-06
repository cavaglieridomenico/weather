import { getTable } from '../file_utility';

const table = `
Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn WxType PDir AvSp Dir MxS SkyC MxR MnR AvSLP

1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5
2  79    63    71          46.5       0.00         330  8.7 340  23  3.3  70 28 1004.5
3  77    55    66          39.6       0.00         350  5.0 350   9  2.8  59 24 1016.8`;

test(`It should return an array of strings with the table rows`, () => {
  expect(getTable(table)).toEqual([
    '',
    'Dy MxT   MnT   AvT   HDDay  AvDP 1HrP TPcpn WxType PDir AvSp Dir MxS SkyC MxR MnR AvSLP',
    '',
    '1  88    59    74          53.8       0.00 F       280  9.6 270  17  1.6  93 23 1004.5',
    '2  79    63    71          46.5       0.00         330  8.7 340  23  3.3  70 28 1004.5',
    '3  77    55    66          39.6       0.00         350  5.0 350   9  2.8  59 24 1016.8',
  ]);
});
