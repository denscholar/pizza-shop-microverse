import commentCounter from '../modules/commentCounter.js';

describe('Count the added comments', () => {
  test('Should return 2 when comment array is two', () => {
    const comments = [
      {
        item_id: 'itemCode',
        username: 'Boaz',
        comment: 'Hello pizza shop',
      },
      {
        item_id: 'itemCode',
        username: 'Reuben',
        comment: 'Good pizza',
      },
    ];
    expect(commentCounter(comments)).toBe(2);
  });
  test('Should return 0 when empty', () => {
    const comments = [];
    expect(commentCounter(comments)).toBe(0);
  });
});