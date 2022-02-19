import reservationCounter from './reservationCounter.js';

describe('Count the added comments', () => {
  test('Should return 2 when comment array is two', () => {
    const comments = [
        {
            item_id: "item1",
            username: "Nanotte",
            date_start: "2020-10-15",
            date_end: "2020-10-16"
        },
        {
            item_id: "item2",
            username: "Esther Alice",
            date_start: "2020-10-17",
            date_end: "2020-10-18"
        },
        {
            item_id: "item3",
            username: "Foreste",
            date_start: "2020-10-20",
            date_end: "2020-10-21"
        },
    ];
    expect(commentCounter(comments)).toBe(2);
  });
  test('Should return 0 when empty', () => {
    const comments = [];
    expect(commentCounter(comments)).toBe(0);
  });
});