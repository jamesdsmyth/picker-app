// converts RGB to HEX
export function colorConversion(rgb) {
  let hex = '#'
    rgb.forEach(item => {
      const str = item.toString(16);
      hex += str.length == 1 ? '0' + str : str;
    });

  return hex
}