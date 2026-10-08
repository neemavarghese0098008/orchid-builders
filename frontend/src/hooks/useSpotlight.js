export const handleSpotMouseMove = (e) => {
  const currentTarget = e.currentTarget;
  const rect = currentTarget.getBoundingClientRect();
  currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};
