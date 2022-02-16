import { commentCounter, getComments } from "./commentAPI";

const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const updateComments = async (foodId) => {
  const json = await getComments(foodId);
  document.querySelector('.comment').innerHTML = '';
  if (json.length !== undefined) {
    json.forEach((user) => {
      document.querySelector('.comment > h4').innerText = `Comments (${commentCounter(json)})`;
      const li = document.createElement('li');
      li.innerText = `${user.item_id}. ${user.username}: ${user.comment}`;
      document.querySelector('.comment > ul').appendChild(li);
    });
  } else {
    document.querySelector('.comment > h4').innerText = `Comments (${commentCounter(json)})`;
  }
}

const displayComments = async (event) => {
  const sourceId = event.target.id;
  const popup = document.createElement('div');
  const parentNode = document.querySelector('body');
  const existingNode = document.querySelector('section');

  popup.setAttribute('id', 'overlay');
  existingNode.parentNode.insertBefore(popup, existingNode);

  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
  const response = await fetch(baseURL);
  const data = await response.json();

  data.hints.forEach((element) => {
    if (element.food.foodId === sourceId) {
      popup.innerHTML = `
            <div class="popupHeader">
            <img src="${element.food.image}" alt="food image">
            <i class="fas fa-times"></i>
            </div>
            <div class="popupLabel">
            <p>${element.food.label}</p>
            </div>
            <div class="popupInfo">
            <table>
            <tr>
            <td>Category: ${element.food.category} </td><td>Fat: ${element.food.nutrients.FAT}</td>
            </tr>
            <tr>
          <td>Weight: ${element.measures[0].weight} </td><td>Calories (kcal): ${element.food.nutrientsENERC_KCAL}</td>
            </tr>
            </table>
            </div>

        <div class="wrapper inner">
          <div id="${result.food.foodId}">
          </div>
          
        <div>
          <form action="">
            <h3>Add Comment</h3>
            <p>Leave your opinion?</p>
            <label class="form-group">
              <input id="user-name" type="text" class="form-control-details" required placeholder="Name">
              <span class="border"></span>
            </label>
            <label class="form-group">
              <textarea id="user-opinion" class="form-control-details" required placeholder="Share your thought"></textarea>
              <span class="border"></span>
            </label>
            <button id="submit-comment">Submit</button>
          </form>
        </div>
      </div>                         
    `;
    }
  });

  const closeBtn = document.querySelector('.fa-times');

  closeBtn.addEventListener('click', () => {
    parentNode.removeChild(popup);
  });
};

export { displayComments, updateComments };