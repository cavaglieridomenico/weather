/**
 * Takes a string as a parameter
 * Returns an array of valid strings, with no superfluous spaces
 * @param {string} string
 * @returns {array}
 */
export const getList = string => {
  const list = string.split(' ');
  return list.filter(item => item !== '');
};

/**
 * Accept as a parameter a table obtained from a file with the .text () method
 * Returns an array of strings with the table rows
 * @param {string} textData
 * @returns {array}
 */
export const getTable = textData => {
  return textData.split(/\n/);
};

/**
 * Takes an array of strings as a parameter
 * Returns an array of valid string arrays:
 * row fields of a table, without Header
 * @param {array} table
 * @returns {array}
 */
export const getBody = table => {
  const body = table.slice(1);
  return body.map(item => getList(item));
};

/**
 * Accept as a parameters:
 * a table obtained from a file with the .text () method
 * the first desired column number in the table
 * the second desired column number in the table
 * Returns the first field of the row of a table that satisfies the following condition:
 * Returns the first field of the row of a table that satisfies the following condition:
 * minor difference between the value of two fields,
 * belonging to the specified columns (parameters 2 and 3 of the function itself)
 * @param {string} textData
 * @param {integer} colNum1
 * @param {integer} colNum2
 * @returns {string}
 */
export const getResult = (textData, colNum1, colNum2) => {
  let tempValue = 0;
  let value = 0;
  let result = '';
  getBody(getTable(textData)).forEach(item => {
    if (
      Number.isNaN(parseFloat(item[colNum1])) ||
      Number.isNaN(parseFloat(item[colNum1])) ||
      !Number.isInteger(parseInt(item[0]))
    )
      return;
    tempValue = parseFloat(item[colNum1]) - parseFloat(item[colNum2]);

    if (value === 0) {
      value = tempValue;
      result = item[0];
    }
    if (value !== 0 && tempValue < value) {
      value = tempValue;
      result = item[0];
    }
    console.log(item[0]);
    console.log('Temp value: ', tempValue);
    console.log('Value: ', value);
    console.log('Result: ', result);
    console.log('-----------------------');
  });
  return result;
};
