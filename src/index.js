/* eslint-disable no-plusplus */
import './styles.css';
import './popupStyle.css';
import './comment.css';
import displayReservations from './modules/display_reservations.js';
import counter from './modules/counter.js';
import { baseURL, likesUrl } from './modules/apis.js';
import displayComments from './modules/displayComments.js';

const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });
const searchResult = document.querySelector('.search-result');

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
      <div class="likes-div">
        <button class="icon" type="button">&#10084;</button>
        <p class="likes" id="${result.food.foodId}"></p>Likes
      </div>
    </div>
    <div class="item-data">
        <a class="comment" id=${result.food.foodId} href="">Comment</a>
        <a class="reserve" id=${result.food.foodId} href="">Reservation</a>
    </div>
        `;
    searchResult.appendChild(divItem);
  });
  getLikes().then((response) => {
    const likes = document.querySelectorAll('.likes');
    for (let i = 0; i < response.length; i++) {
      likes[i].textContent = `
        ${response[i].likes}
      `;
    }
  });

  const icons = document.querySelectorAll('.icon');
  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      addLikes(e);
      const numOfLikes = e.target.parentNode.children[1];
      numOfLikes.textContent = +numOfLikes.textContent + 1;
    });
  });
};

const desplayResult = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHtml(data.hints);
};

desplayResult();

document.querySelector('.search-result').addEventListener('click', (event) => {
  event.preventDefault();

  displayReservations(event);
  displayComments(event);
});

counter().then((data) => {
  const counter = data.hints.slice(3, 12).length;
  const countHeader = document.querySelector('.counter');
  countHeader.textContent = `
    ${counter} Pizzers available
  `;
});