import { TORRE_URL_API, TORRE_URL_API_SEARCH, TORRE_URL_API_JOBS } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  newApiHeaders.append("Content-Type", "application/json");
  newApiHeaders.append("Accept", "application/json");
  return {
    method,
    headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiTorre = {
  getsBioInformation: async username => {
    try {
      const response = await fetch(`${TORRE_URL_API}${endpoints.torre.getsBioInformation}/${username}`, fetchParams('GET'));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  getsJobInformation: async id => {
    try {
      const response = await fetch(`${TORRE_URL_API_JOBS}${endpoints.torre.getsJobInformation}/${id}`, fetchParams('GET'));
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  searchOpportunities: async (search, offset, size, aggregate) => {
    try {
      const response = await fetch(`${TORRE_URL_API_SEARCH}${endpoints.torre.searchOpportunities}/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`, fetchParams('POST', { ...search }));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  searchPeople: async (search, offset, size, aggregate) => {
    try {
      const response = await fetch(`${TORRE_URL_API_SEARCH}${endpoints.torre.searchPeople}/_search/?offset=${offset}&size=${size}&aggregate=${aggregate}`, fetchParams('POST', { ...search }));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 409 || response.status === 500 ) {
        const data = await response.json();
        if (typeof data.error !== 'undefined') {
          return data.error;
        }
        if (typeof data.message !== 'undefined') {
          return data.message;
        }
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default apiTorre;
