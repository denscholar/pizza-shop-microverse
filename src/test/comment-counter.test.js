import commentCounter from '../modules/commentCounter.js';

describe('Count the number of comments', () => {
  test('Return 2 when there are two comments in the array', () => {
    const comments = [
      {
        item_id: 'itemID',
        username: 'Boaz Aduda',
        comment: 'Nice food',
      },
      {
        item_id: 'itemID',
        username: 'Geoffrey Aduda',
        comment: 'Good pizza',
      },
    ];
    expect(commentCounter(comments)).toBe(2);
  });

  test('Should return 0 when the comment array is zero', () => {
    const comments = [];
    expect(commentCounter(comments)).toBe(0);
  });
});