const getComments = async (id) => {
  const json = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lyq9jUNEHrKhgXNSU82r/comments?item_id=${id}`)
    .then((response) => response.json());
  return json;
};

const addComments = async (id, username, comments) => {
  const commentInfo = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lyq9jUNEHrKhgXNSU82r/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comments,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await commentInfo.text();
  return json;
};

export { getComments, addComments };