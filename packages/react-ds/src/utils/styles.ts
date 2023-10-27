export function getCssPrefix() {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  return style.getPropertyValue(`prefix`).trim();
}
