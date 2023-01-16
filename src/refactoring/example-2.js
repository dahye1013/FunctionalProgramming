import { forEach } from "./utils/collection"

const foods = ['치킨', '피자']
const dishes = [1, 2, 3, 4, 5]

const cook = (food) => {}
const eat = (food) => {}
const wash = (dish) => {}
const dry = (dish) => {}
const putAway = (dish) => {}

forEach(foods, (food) => {
  cook(food);
  eat(food);
})

forEach(dishes, () => {
  wash(dish);
  dry(dish);
  putAway(dish);
})

