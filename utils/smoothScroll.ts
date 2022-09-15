export const removeSmoothScroll = () => {
  document.querySelector('html')!.style.scrollBehavior = 'auto';
  document.querySelector('body')!.style.scrollBehavior = 'auto';
};

export const addSmoothScroll = () => {
  document.querySelector('html')!.style.scrollBehavior = 'smooth';
  document.querySelector('body')!.style.scrollBehavior = 'smooth';
};
