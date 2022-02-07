export const formatDate = (date) => {
  if (!date) return ' - ';

  let temp = date.slice(0, 10).replaceAll('-', ' ');
  return temp;
};
