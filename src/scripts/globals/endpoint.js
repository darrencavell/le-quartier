import CONFIG from './config';

const ENDPOINT = {
  LIST_RESTAURANT: async () => {
    return await (await fetch(`${CONFIG.BASE_URL}/list`)).json();
  },
  DETAIL_RESTAURANT: async (id) => {
    return await (await fetch(`${CONFIG.BASE_URL}/detail/${id}`)).json();
  },
  QUERY_RESTAURANT: async (query) => {
    return await (await fetch(`${CONFIG.BASE_URL}/search?q=${query}`)).json();
  },
  // INSERT_REVIEW: async (data) => {
  //   await fetch(`${CONFIG.BASE_URL}/review`{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Auth-Token:': CONFIG.API_KEY
  //     },
  //     body: JSON.stringify(data)
  //   });
  // },
  IMAGE_RESTAURANT: (size, pictureId) => {
    return `${CONFIG.IMAGE_URL}/${size}/${pictureId}`;
  }
}

export default ENDPOINT;
