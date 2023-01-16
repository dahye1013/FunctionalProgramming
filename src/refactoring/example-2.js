const cook = (food) => {}
const eat = (food) => {}
const wash = (dish) => {}
const dry = (dish) => {}
const putAway = (dish) => {}

const foods = ['치킨', '피자']
forEach(foods, (food) => {
  cook(food);
  eat(food);
})

const dishes = [1,2,3,4,5]
forEach(dishes, () => {
  wash(dish);
  dry(dish);
  putAway(dish);

})

function forEach(array, callback) {
  if(!Array.isArray(array)) throw new Error('배열 인스턴스를 첫 번째 인자로 넣어주세요.')
  for (let index = 0; index < array.length; index++) {
      const el = array[index];
      callback(el, index, array)
  }
}
