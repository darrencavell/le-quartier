import CONFIG from './config';

const ENDPOINT = {
  LIST_RESTAURANT: async () => {
    const response = await fetch(`${CONFIG.BASE_URL}/list`);
    return response.json();
  },
  DETAIL_RESTAURANT: async (id) => {
    const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
    return response.json();
  },
  QUERY_RESTAURANT: async (query) => {
    const response = await fetch(`${CONFIG.BASE_URL}/search?q=${query}`);
    return response.json();
  },
  INSERT_REVIEW: async (data) => {
    const response = await fetch(`${CONFIG.BASE_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  IMAGE_RESTAURANT: (size, pictureId) => `${CONFIG.IMAGE_URL}/${size}/${pictureId}`,
};

export default ENDPOINT;
