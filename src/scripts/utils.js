export const property = (key, value) => {
  if (!value) return;
  return `${key}="${value}"`;
}

export const renderChildren = children => {
  return children.join('');
}