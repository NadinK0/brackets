module.exports = function check(str, bracketsConfig) {
  const regex = /7/g;
  let newStr = str.replace(regex, '|');
  let arr = Array.from(newStr);
  const arrOfStr = [];
  let res;
  let index = arr.indexOf('|');
    while (index != -1) {
      arrOfStr.push(index);
      index = arr.indexOf('|', index + 1);
    }
  for (let s = 0; s < arrOfStr.length - 1; s += 2) {
    if ((arrOfStr[s + 1] - arrOfStr[s]) % 2 === 0) {
      res = false;
      return res;
    } 
    if ((arrOfStr[s + 1] - arrOfStr[s]) % 2 !== 0) {
      arr = arr.filter((e) => e !== '|');
      const regex1 = /8/g;
      newStr = arr.join('').replace(regex1, '|');
      arr = Array.from(newStr); 
    }
  }
  if (arr.length === 0) {
    res = true;
  } else {
    const stack = [];
    stack.push(arr[0]);
    let j = 0;
    for (let i = 1; i < arr.length; i += 1) {
        for (let b = 0; b < bracketsConfig.length; b += 1) {
        if (arr[i] === bracketsConfig[b][0]) {
          stack.push(arr[i]);
        }
        if (arr[i] === bracketsConfig[b][1]) {
          if (stack[i - 1 - j] === bracketsConfig[b][0]) {
            stack.pop();
            j += 2;
          } else {
            stack.push(arr[i]);
          }
        }
      }
    }
    if (stack.length === 0) {
      res = true;
    } else {
      res = false;
    }
  }
  return res;
}
