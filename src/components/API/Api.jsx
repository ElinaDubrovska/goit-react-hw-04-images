import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getFetchImages = async (query, page = 1) => {
  const response = await axios({
    params: {
      key: '34443697-d9f859220b94cfe4401518737',
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page: 12,
      q: query,
    },
  });

  return response.data;
};
