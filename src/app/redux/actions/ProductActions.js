import axios from 'axios';

export const GET_PRODUCT_FROM_ID = 'GET_PRODUCT_FROM_ID';

export const getProductFromID = () => (dispatch) => {
  axios.get('/api/ecommerce/get-product-list').then((res) => {
    dispatch({
      type: GET_PRODUCT_FROM_ID,
      payload: res.data,
    });
  });
};

