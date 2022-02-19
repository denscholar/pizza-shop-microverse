const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
let comStr = '';
let counter;

const displayComments = async (event) => {
  if (event.target.classList.contains('comment')) {
    const sourceId = event.target.id;
    const popup = document.createElement('div');
    const parentNode = document.querySelector('body');
    const existingNode = document.querySelector('section');

    popup.setAttribute('id', 'overlay');
    existingNode.parentNode.insertBefore(popup, existingNode);

    const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments?item_id=${sourceId}`);
    const commentItem = await comments.json();

    commentItem.forEach((element) => {
      comStr += `<div> ${element.username} : ${element.comment} </div>`;
    });

    const commentCounter = () => {
      if (commentItem.length) {
        counter = commentItem.length;
      } else {
        counter = 0;
      }
    };

    commentCounter();

    const baseURL = `https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13`;
    const response = await fetch(baseURL);
    const data = await response.json();
    let itemCode;

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

            <div>
              <p><span>Comments</span> (<span id="count-comments">${counter}</span>) </p>
            </div>

            <div>
            <ul id="show-comment">
            ${comStr}
            </ul>
            </div>
            
                      

            <form class="form-comment">
              <h4>Add a comment </h4>
              <input type="text" placeholder="Name" id="username" name="username" maxlength="20 required"/>
              <textarea name="text-area" maxlength="300" id:"comment" placeholder="Leave a comment" required></textarea>
              <button type="submit" class="add-btn">Comment</button>
            </form>
          </div>
        `;
      }
    });

    const submitButton = document.querySelector('.add-btn');
    const createComments = async (obj) => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify(obj);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/', requestOptions);
    };

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const user = document.querySelector('#username').value;
      const comt = document.querySelector('textarea').value;
      const counterComment = document.querySelector('#count-comments');
      const showComment = document.querySelector('#show-comment');

      localStorage.setItem('session', event);
      const obj = {
        item_id: itemCode,
        username: user,
        comment: comt,
      };

      createComments(obj);
      counterComment.innerHTML = counter + 1;
      showComment.innerHTML = `${comStr}<div> ${user} : ${comt} </div>`;

      document.querySelector('.form-comment').reset();
    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
    });
  }
  return event;
};

export default displayComments;