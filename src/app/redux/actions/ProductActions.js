import axios from 'axios';

export const GET_PRODUCT_FROM_ID = 'GET_PRODUCT_FROM_ID';
const encodedParams = new URLSearchParams();
encodedParams.set('source', 'amazon');
encodedParams.set('country', 'uk');
encodedParams.set('values', 'B07RGPSKVB');

const options = {
  method: 'POST',
  url: 'https://price-analytics.p.rapidapi.com/search-by-term',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '2bd8ecc337msh1832ba998462e77p18c906jsnc5cb44cbd8ef',
    'X-RapidAPI-Host': 'price-analytics.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const getProductFromID = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_PASSENGERS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_PASSENGERS_REJECTED", payload: err });
    }
  };
};




