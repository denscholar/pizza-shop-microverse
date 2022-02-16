import { commentCounter } from "./commentAPI";

const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const getPizzaDetails = async (id) => {
  const getInfo = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13/${id}`);
  const json = await getInfo.json();
  return json;
};

if (event.target.classList.contains('comment')) { }

const updateComments = async (foodId) => {
  const json = await getPizzaDetails(foodId);
  document.querySelector('.comment').innerHTML = '';
  if (json.length !== undefined) {
    json.forEach((user) => {
      document.querySelector('.comment > h4').innerText = `Comments (${commentCounter(json)})`;
      const li = document.createElement('li');
      li.innerText = `${item_id}. ${username}: ${comment}`;
      document.querySelector('.comment > ul').appendChild(li);
    });
  } else {
    document.querySelector('.comment > h4').innerText = `Comments (${commentCounter(json)})`;
  }
}
