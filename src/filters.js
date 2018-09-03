export const abr = value => {
  if (!value) return '';
  return `${value.slice(0, 3).toUpperCase()}`;
};
export const capitalize = value => {
  if (!value) return '';
  return `${value[0].toUpperCase()}${value.slice(1)}`;
};
export const toBytes = value => {
  const units = ['', 'k', 'M', 'G'];
  if (!value) return '';
  while (value / 1024 > 1) {
    units.splice(0, 1);
    value = value / 1024;
  }
  value = value.toFixed(2);
  return `${value}${units[0]}b`;
};
