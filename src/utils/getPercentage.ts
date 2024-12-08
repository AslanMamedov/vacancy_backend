export const getPercentage = (part: number, total: number = 10) => {
  if (total === 0) {
    throw new Error('Total cannot be zero.');
  }
  return ((part / total) * 100).toFixed(2);
};
