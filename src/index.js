import './styles.css';
import './popupStyle.css';
import displayReservations from './modules/display_reservations.js';

const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
const searchResult = document.querySelector('.search-result');

const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/likes';

const getLikes = async () => {
  try {
    const response = await fetch(likesUrl);
    return await response.json();
  } catch (err) {
    return err;
  }
};

const addLikes = async (e) => {
  const element = e.target.parentNode.children[1].id;
  const fetchLikes = await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: element,
    }),
    headers: header,
  });
  return fetchLikes;
};

const generateHtml = (results) => {
  results.slice(3, 12).forEach((result) => {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
        <img src="${result.food.image}" alt="${result.food.label}">
        <div class="flex-container">
            <h1 class="title">${result.food.label}</h1>
            <div class="like-div">
            <button class="icon" type="button">&#10084;</button>
            </div>
        </div>
        <p class="item-data">
            <a class="comment" id=${result.food.foodId} href="">Comment</a>
            <a class="reserve" id=${result.food.foodId} href="">Reservation</a>
        </p>
        `;
    searchResult.appendChild(divItem);
  });
  const div = document.querySelectorAll('.like-div');
  div.forEach((container, index) => {
    getLikes().then((response) => {
      const likes = document.createElement('p');
      likes.classList.add('likes');
      likes.setAttribute('id', `${response[index].item_id}`);
      likes.textContent = `
       ${response[index].likes} Likes
        `;
      container.appendChild(likes);
    });
  });

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', addLikes);
  });

  // counter
  const counterHandler = document.querySelector('.counter');
  const counter = results.slice(3, 12).length;
  counterHandler.innerHTML = `
    ${counter} Pizza currently available
  `;
};

const desplayResult = async () => {
  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHtml(data.hints);
};

desplayResult();

document.querySelector('.search-result').addEventListener('click', (event) => {
  event.preventDefault();
  displayReservations(event);
});
