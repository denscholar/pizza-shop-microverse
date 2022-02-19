const reservationCounter = (reservation) => {
    let counter;
  if (reservation.length) {
    counter = reservation.length;
  } else {
    counter = 0;
  }
  return counter
};

export default reservationCounter;