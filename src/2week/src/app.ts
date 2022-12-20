import { sum_array, add_element_to_array, add } from "./utils";
// A
const shopping_cart: Item[] = [];

// A
document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target }: any) => {
    const name = target.parentNode.querySelector(".menu-name").textContent;
    const category = target.parentNode.querySelector(".category").textContent;
    const price = target.parentNode.querySelector(".price").textContent;

    const item: Item = {
      name,
      category,
      price,
    };

    add_item_to_cart(item);
  })
);

// A
const add_item_to_cart = (item: Item) => {
  const next_cart = add_item(shopping_cart, item);
  calc_cart_total(shopping_cart);
};

// A
const calc_cart_total = (cart: Item[]) => {
  const shopping_cart_total = calc_cart_total_price(cart);
  console.log(shopping_cart_total);
  update_shipping_icons(shopping_cart_total);
  set_cart_total_dom(shopping_cart_total);
  update_tax_dom(shopping_cart_total);
};

// A
const set_cart_total_dom = (cart_total: number) => {
  document.querySelector(".total-price")!.textContent = `${cart_total}원`;
};

// A
const update_shipping_icons = (cart_total: number) => {
  const buy_buttons = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const item: ItemBuyButton = buy_buttons[i];
    const price = get_cart_price(item);
    const next_total = add(cart_total, price);
    gets_free_shipping(next_total, FREE_SHIPPING_PRICE)
      ? item!.show_free_shopping_icon()
      : item!.hide_free_shopping_icon();
  }
};

// A
const get_buy_buttons_dom = () => {
  const buttons: ItemBuyButton[] = [];

  for (let i = 0; i < shopping_cart.length; i++) {
    const item: ItemBuyButton = shopping_cart[i];
    item.show_free_shopping_icon = function () {
      console.log("DOM 의 아이콘을 보여줍니다");
    };
    item.hide_free_shopping_icon = function () {
      console.log("DOM 의 아이콘을 숨깁니다");
    };
    buttons.push(item);
  }

  return buttons;
};

// A
const update_tax_dom = (calc_total: number) => {
  set_tax_dom(calc_total * TAX_SCALE);
};

// A
const set_tax_dom = (value: number) => {
  document.querySelector(".total-price")!.textContent = String(value);
};

// C - shipping
const gets_free_shipping = (addedPrice: number, freeShippingPrice: number) =>
  addedPrice >= freeShippingPrice;

// C - cart
const get_cart_price_list = (cart: Item[]) =>
  cart.map((item: Item) => get_cart_price(item));
const get_cart_price = <T extends { price: number }>({ price }: T) => price;

// C - cart
const calc_cart_total_price = (cart: Item[]) =>
  sum_array(get_cart_price_list(cart));

// C - cart
const add_item = (cart: Item[], item: Item) => add_element_to_array(cart, item);

// C - item
const calc_added_item = (total: number, item: { price: number }) =>
  add(total, item.price);

// D
const FREE_SHIPPING_PRICE = 20000;
const TAX_SCALE = 0.1;
