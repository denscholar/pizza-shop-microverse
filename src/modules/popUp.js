const appId = '2d879374';
const appKey = 'f1a2011b05e44970c7a43ac9a5a11568';

const getPizzaInfo = async (pizzaID) => {
  const getInfo = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=pizza&app_id=${appId}&app_key=${appKey}&to=13/${pizzaID}`);
  const json = await getInfo.json();
  return json;
};