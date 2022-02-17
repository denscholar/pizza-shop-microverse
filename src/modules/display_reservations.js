const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const displayReservations = async (event) => {
  if (event.target.classList.contains('reserve')) {
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
            <div class="popupReservation">
            <h2>Add a reservation</h2>
            <form>
            <input type="text" name="userName" id="userName" placeholder="Your name" class="userInput" required>
            <input type="date" name="startDate" id="startDate" placeholder="Start date" class="userInput" required>
            <input type="date" name="endDate" id="endDate" placeholder="End date" class="userInput" required>
            <button type="button" class="submitBtn">Reserve</button>
            </form>      
            </div>   
            `;
      }
    });

    const submitButton = document.querySelector('.submitBtn');

    submitButton.addEventListener('click', (event) => {
      event.preventDefault;
      const nameOfUser = document.querySelector('#userName').value;
      const starting = document.querySelector('#startDate').value;
      const ending = document.querySelector('#endDate').value;
      const obj = {
        item_id: itemCode,
        username: nameOfUser,
        date_start: starting,
        date_end: ending,
      };

      createReservation(obj);
    });

    const closeBtn = document.querySelector('.fa-times');

    closeBtn.addEventListener('click', () => {
      parentNode.removeChild(popup);
    });
  }
};

const createReservation = async (obj) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(obj);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/reservations/', requestOptions);
};

export default displayReservations;
