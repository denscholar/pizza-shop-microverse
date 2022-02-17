import { addComments } from './commentAPI.js';

const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const displayComments = async (event) => {
  if (event.target.classList.contains('comment')) {
    const sourceId = event.target.id;
    const popup = document.createElement('div');
    const parentNode = document.querySelector('body');
    const existingNode = document.querySelector('section');

    popup.setAttribute('id', 'overlay');
    existingNode.parentNode.insertBefore(popup, existingNode);

    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
    const response = await fetch(baseURL);
    const data = await response.json();
    let itemCode;
    let commentLength = 0;

    data.hints.forEach((element) => {
      if (element.food.foodId === sourceId) {
        itemCode = element.food.foodId;

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
            <td>Weight: ${element.measures[0].weight} </td><td>Calories (kcal): ${element.food.nutrients.ENERC_KCAL}</td>
            </tr>
            </table>
            </div>
            <div class="comment-section">
            <h2>Add a comment</h2>
            <h4>Comments (<span class="counter">${commentsLength}</span>)</h4>
            <ul class="comment-container"></ul>
            <form >
                <input type="text" placeholder="Name" id="username" name="username" maxlength="20" required/>
                <textarea name="text-area" maxlength="220" id:"comment" placeholder="Leave a comment" required></textarea>
                <button type="submit" class="add-btn">Comment</button>
              </form>     
            </div>   
            `;
      }
    });

    const submitButton = document.querySelector('.add-btn');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault;
      const nameOfUser = document.querySelector('#userName').value;
      const comt = document.querySelector('#comment').value;
      const obj = {
        item_id: itemCode,
        username: nameOfUser,
        comt: comment,
      };

      createComments();
      addComments(event, form, id);
    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
    });
  }
};

const commentSection = document.querySelector('.container');

const createComments = (foodData, commentLength) => {
  const comArticle = document.createElement('div');
  comArticle.className = 'comment-card';
  comArticle.innerHTML = displayComments(foodData, commentLength);
  commentSection.appendChild(comArticle);
};

export default displayComments;