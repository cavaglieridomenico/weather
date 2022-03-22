import { getList } from '../file_utility';

test(`It should return an array of valid strings`, () => {
  expect(getList('Javascript is the best programming language')).toEqual([
    'Javascript',
    'is',
    'the',
    'best',
    'programming',
    'language',
  ]);
});
