const getTable = textData => {
  return textData.split(/\n/);
};

const getHeader = table => {
  const header = table[0].split(/,/);
  return header.map(item => item.replace(' ', ''));
};

const getList = string => {
  const list = string.split(' ');
  return list.filter(item => item !== '');
};

const getBody = table => {
  const body = table.slice(1);
  return body.map(item => getList(item));
};

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

export const getListFromText = textData => {
  const table = getTable(textData);
  const header = getHeader(table);
  const body = getBody(table);
  return { header, body };
};
