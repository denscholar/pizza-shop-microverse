import counter from '../modules/counter.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve({ length: 9 }),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

// This is actual testing suite
describe('returns back the length of the array', () => {
  test('counter', async () => {
    const json = await counter();
    expect(json.length).toEqual(9);
  });
});