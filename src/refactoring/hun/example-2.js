// dummy
var foods = ['음식1', '음식2', '음식3'];
var dishes = ['접시1', '접시2', '접시3'];

const cook = food => console.log(`cook food: ${food}`);
const eat = food => console.log(`eat food: ${food}`);
const wash = dish => console.log(`wash dish: ${dish}`);
const dry = dish => console.log(`dry dish: ${dish}`);
const putAway = dish => console.log(`putAway dish: ${dish}`);

// food 하나에 대한 동작들
const cookAndEat = food => {
  cook(food);
  eat(food);
};

// dish 하나에 대한 동작들
const clearDish = dish => {
  wash(dish);
  dry(dish);
  putAway(dish);
};

const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr(i));
  }
};

// 실행 로직을 선언적으로 표현
forEach(foods, cookAndEat);
forEach(dishes, clearDish);
