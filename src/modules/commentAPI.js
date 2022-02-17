const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const ID = 'IvP42xNcmZ7sT5rp87wL';

const makeComments = async (username, comment, id) => {
  const resolve = await fetch(`${URL}/${ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await resolve.text();
  return result;
};

const getComment = async (id) => {
  const resolve = await fetch(`${URL}/${ID}/comments?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const commentsCounter = async (id) => {
  const commentsNum = await getComment(id);
  if (!commentsNum.length) {
    return 0;
  }
  return commentsNum.length;
};

const commentTemplate = (date, name, comment) => `
  <li>
    <span>${date}</span>
    <span>${name}: </span>
    <span>${comment}</span>
  </li>
`;

const displayComments = async (id) => {
  const ul = document.querySelector('ul');
  const commentArr = await getComment(id);
  ul.innerHTML = '';
  let html = '';

  commentArr.forEach((element) => {
    const commentItem = commentTemplate(
      element.creation_date,
      element.username,
      element.comment,
    );
    html += commentItem;
  });
  ul.insertAdjacentHTML('beforeend', html);
};

const addComment = async (form, id) => {
  const itmCounter = document.querySelector('.counter');
  const name = document.querySelector('input');
  const comment = document.querySelector('textarea');

  await makeComments(name.value, comment.value, id);
  await displayComments(id);
  itmCounter.textContent = await commentsCounter(id);
  form.reset();
};

export {
  displayComments, addComment, commentsCounter, getComment,
};
