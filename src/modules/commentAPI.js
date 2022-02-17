const getComments = async (foodId) => {
  const json = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GpS015MsEJIxdqPoPigd
/comments?item_id=${foodId}`)
    .then((response) => response.json());
  return json;
};

const commentCounter = (json) => {
  if (json.length === undefined || json.length === null) return 0;
  return json.length;
};

const addComments = async (foodId, username, comments) => {
  const commentInfo = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/IvP42xNcmZ7sT5rp87wL/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: foodId,
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

export { getComments, commentCounter, addComments };