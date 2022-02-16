const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const displayReservations = async (event) => {
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
            <td>Weight: ${element.measures[0].weight} </td><td>Calories (kcal): ${element.food.nutrients.ENERC_KCAL}</td>
            </tr>
            </table>
            </div> `;
    }
  });

  const closeBtn = document.querySelector('.fa-times');

  closeBtn.addEventListener('click', () => {
    parentNode.removeChild(popup);
  });
};

export default displayReservations;