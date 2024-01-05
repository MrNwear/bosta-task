var reg = /^\d+$/;
export function isNumber(value) {
  return reg.test(value);
}
