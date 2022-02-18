import postAPIComments from './commentAPI.js';

const createComments = async (event, id) => {
  event.preventDefault();

  const username = document.querySelector('username');
  const comment = document.querySelector('comment');
  const alart = document.querySelector('alart');

  if (username.value === '') {
    alart.textContent = 'Name should not be blank';
    return;
  }
  if (comment.value === '') {
    alart.textContent = 'Please enter a comment';
    return;
  }

  const body = {
    item_id: id,
    username: username.value,
    comment: comment.value,
  };

  const postComment = await postAPIComments(body);
  if (postComment === 'success') {
    alart.textContent = 'Comment added successfully';
  } else {
    alart.textContent = 'Please retry';
  }

  username.value = '';
  comment.value = '';
};

export default createComments;