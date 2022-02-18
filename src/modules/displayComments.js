const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';
let counter = 0;

const displayComments = async (event) => {
  if (event.target.classList.contains('comment')) {
    const sourceId = event.target.id;
    const popup = document.createElement('div');
    const parentNode = document.querySelector('body');
    const existingNode = document.querySelector('section');

    popup.setAttribute('id', 'overlay');
    existingNode.parentNode.insertBefore(popup, existingNode);

    const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments?item_id=${sourceId}`);
    const comList = await comments.json();

    counter = comList.length;

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
            <h2>Add a comment</h2>
            <h4>Comments (<span class="counter">${counter}</span>)</h4>
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

    const submitButton = document.querySelector('.submitBtn');
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
      const nameOfUser = document.querySelector('#username').value;
      const comment = document.querySelector('#comment').value;
      const obj = {
        item_id: itemCode,
        username: nameOfUser,
        comt: comment,
      };

      createComments(obj);
    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
    });
  }
};

export default displayComments;