import axios from 'axios';

import {apiBaseUrl} from '../utils/config';

//Fetch public feed from api
export const getPublicFeed = () =>
  axios({
    method: 'get',
    url: `${apiBaseUrl()}/public`,
  }).then((res) => res.data);

//Fetch feed that was filter by tags with query tags
export const getSearchedFeed = (tags) =>
  axios({
    method: 'get',
    url: `${apiBaseUrl()}/search?tags=${tags}`,
  }).then((res) => res.data);
