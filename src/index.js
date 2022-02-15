import './styles.css';

const searchResult = document.querySelector('.search-result');

const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const generateHtml = (results) => {
  results.slice(0, 13).forEach((result) => {
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    divItem.innerHTML = `
        <img src="${result.food.image}" alt="">
        <div class="flex-container">
            <h1 class="title">${result.food.label}</h1>
            <p class="likes"><span class="heart">&#10084;</span> 5 likes</p>
        </div>
        <p class="item-data">
            <a class="comment" href="">Comment</a>
            <a class="reserve" href="">Reservation</a>
        </p>
        `;
    searchResult.appendChild(divItem);
  });
};

const desplayResult = async () => {
  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHtml(data.hints);
};

desplayResult();
