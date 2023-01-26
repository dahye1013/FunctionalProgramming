// 고차 함수
const setFieldByName = field => (cart, name, value) => {
  const newItem = { ...cart[name], [field]: value };
  return { ...cart, [name]: newItem };
  // var item = cart[name];
  // var newItem = objectSet(item, field, value);
  // var newCart = objectSet(cart, name, newItem);
  // return newCart;
};

// 각 field에 해당하는 setFieldByName을 각각 생성
const setPriceByName = setFieldByName('price');
const setShippingByName = setFieldByName('shipping');
const setQuantityByName = setFieldByName('quantity');
const setTaxByName = setFieldByName('tax');

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
