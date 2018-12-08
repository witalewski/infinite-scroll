export const placeholderHeightGenerator = (() => {
  const results = [0.75, 1, 1, 1.33];
  return {
    next: () => results[Math.floor(Math.random() * 4)],
  };
})();
