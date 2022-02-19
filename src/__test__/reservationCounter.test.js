import reservationCounter from '../modules/reservationCounter.js';

describe('Count the added reservations', () => {
  test('Should return 2 when reservations array is two', () => {
    const reservations = [
      {
        item_id: 'item1',
        username: 'Nanotte',
        date_start: '2020-10-15',
        date_end: '2020-10-16',
      },
      {
        item_id: 'item2',
        username: 'Esther Alice',
        date_start: '2020-10-17',
        date_end: '2020-10-18',
      },
      {
        item_id: 'item3',
        username: 'Foreste',
        date_start: '2020-10-20',
        date_end: '2020-10-21',
      },
    ];
    expect(reservationCounter(reservations)).toBe(3);
  });
  test('Should return 0 when empty', () => {
    const reservations = [];
    expect(reservationCounter(reservations)).toBe(0);
  });
});