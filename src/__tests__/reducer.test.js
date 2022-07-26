import CryptoReducer from '../Redux/cryptoReducer';

const Url = 'FETCH_COINS';
describe('Test the CryptoReducer Function', () => {
  test('CryptoReducer to return an empty array if action is Undefined', () => {
    const testingState = [];
    const Result = CryptoReducer(undefined, {
      type: undefined,
      payload: undefined,
    });
    expect(Result).toEqual(testingState);
  });
  test('CryptoReducer returns new state', () => {
    const FakeData = ['1', '2', '3'];
    const Result = CryptoReducer(undefined, { type: Url, payload: FakeData });
    expect(Result).toEqual(FakeData);
  });
});
