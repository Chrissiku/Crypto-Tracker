const BASE_URL = 'https://api.coinstats.app/public/v1/coins';
const FETCH_COINS = 'FETCH_COINS';
const initialState = [];

export const FetchData = (data) => ({
  type: FETCH_COINS,
  payload: data,
});

export const LoadCrypto = () => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const { coins } = await response.json();
  dispatch(FetchData(coins));
};

const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload;
    default:
      return state;
  }
};

export default CryptoReducer;
