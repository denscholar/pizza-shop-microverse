const commentCounter = (comments) => {
  let counter;
  if (comments.length) {
    counter = comments.length;
  } else {
    counter = 0;
  }
  return counter;
};

export default commentCounter;