export const abr = value => {
  if (!value) return '';
  return `${value.slice(0, 3).toUpperCase()}`;
};
export const capitalize = value => {
  if (!value) return '';
  return `${value[0].toUpperCase()}${value.slice(1)}`;
};
