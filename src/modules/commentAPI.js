const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'IvP42xNcmZ7sT5rp87wL';

const postComment = async (username, comment, id) => {
  const response = await fetch(`${URL}/${appID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await response.text();
  return result;
};

const getComments = async (id) => {
  const response = await fetch(`${URL}/${appID}/comments?item_id=${id}`);
  const results = await response.json();

  if (!result.length) {
    return [];
  }
  return results;
};

const commentCounter = async (id) => {
  const count = await getComments(id);
  if (!count.length) {
    return 0;
  }
  return count.length;
};

const commentTemp = (date, name, comment) => `
<li>
  <span>${date}</span>
  <span>${name}</span>
  <span>${comment}</span>
</li>`;

const showComments = async (id) => {
  const UL = document.querySelector('ul');
  const comArr = await getComments(id);
  UL.innerHTML = '';
  let html = '';

  comArr.forEach((element) => {
    const commItem = commentTemp(
      element.creation_date,
      element.username,
      element.comment,
    );
    html += commItem;
  });
  UL.insertAdjacentHTML('beforeend', html);
};

const addComments = async (event, form, id) => {
  event.preventDefault();
  const count = document.querySelector('.counter');
  const user = form.querySelector('input');
  const comment = form.querySelector('textarea');

  await postComment(user.value, comment.value, id);
  await showComments(id);
  count.textContent = await commentCounter(id);
  form.reset();
};

export {
  addComments,
  commentCounter,
  getComments,
};