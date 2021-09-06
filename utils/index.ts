type DOMElement = Element | HTMLElement | undefined | null;

export const getElementWidth = (el: DOMElement) => {
  if (!el) return 0;
  return parseFloat(getComputedStyle(el, null).width.replace('px', ''));
};

export const getElementHeight = (el: DOMElement) => {
  if (!el) return 0;
  console.log('getComputedStyle');
  console.log(el);
  console.log(getComputedStyle(el, null).height);
  return parseFloat(getComputedStyle(el, null).height.replace('px', ''));
};
