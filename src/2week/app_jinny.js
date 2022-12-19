let shopping_cart = [];

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target }) => {
    const name = target.parentNode.querySelector(".menu-name").textContent;
    const category = target.parentNode.querySelector(".category").textContent;
    const price = target.parentNode.querySelector(".price").textContent;
    shopping_cart = add_item_to_cart(shopping_cart, {
      name,
      category,
      price,
    });
    const total_price = calc_cart_total_price(shopping_cart);
    update_shipping_icons(total_price);
    set_cart_total_dom(total_price);
  })
);

// A
const set_cart_total_dom = (cart_total) => {
  document.querySelector(".total-price").textContent = `${update_tax(
    cart_total
  )}원`;
};

// A
const update_shipping_icons = (cart_total) => {
  let button_visible = false;
  shopping_cart.map((item) => {
    const price = get_cart_price(item);
    const next_total = add(cart_total, price);
    button_visible = gets_free_shipping(next_total, FREE_SHIPPING_PRICE);
  });
  button_visible
    ? console.log("버튼을 보여준다")
    : console.log("버튼을 숨긴다");
};

// C
const update_tax = (calc_total) => calc_total + calc_total * TAX_SCALE;

// C - shipping
const gets_free_shipping = (addedPrice, freeShippingPrice) =>
  addedPrice >= freeShippingPrice;

// C - cart
const get_cart_price_list = (cart) => cart.map((item) => get_cart_price(item));
const get_cart_price = ({ price }) => convert_string_to_number(price);
const convert_string_to_number = (str) =>
  Number(str.replaceAll(",", "").replace("원", ""));
// C - cart
const add_item = (cart, item) => add_element_to_array(cart, item);

// C -cart
const add_item_to_cart = (cart, item) => {
  const next_cart = add_item(cart, item);
  return next_cart;
};
// C - cart
const calc_cart_total_price = (cart) => sum_array(get_cart_price_list(cart));

// C - util
const sum_array = (numArray) => numArray.reduce(add, 0);
// C - util
const add_element_to_array = (array, element) => [...array, element];

// C - util
const add = (num1, num2) => num1 + num2;

// D
const FREE_SHIPPING_PRICE = 20000;
const TAX_SCALE = 0.1;
