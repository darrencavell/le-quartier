export const property = (key, value) => {
  if (!value) return '';
  return `${key}="${value}"`;
};

export const renderChildren = (children) => children.join('');

export const urlSlicing = (url) => {
  const slicedHashUrl = url.slice(1).toLowerCase();

  return slicedHashUrl;
};
export const urlSplitting = (url) => {
  const urls = url.split('/');
  // eslint-disable-next-line no-unused-vars
  const [_, resource, resourceId, resourceVerb] = urls;

  return { resource, resourceId, resourceVerb };
};

export const urlGrouping = (url) => {
  const resource = url.resource ? `/${url.resource}` : '/';
  const resourceId = url.resourceId ? '/:id' : '';
  const resourceVerb = url.resourceVerb ? `/${url.resourceVerb}` : '';

  return resource + resourceId + resourceVerb;
};

export const escapeHtml = (unsafe) => unsafe
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');
