// type
type Category = "C" | "B";
const CATEGORY_MAP: { [key in Category]: key } = {
  C: "C",
  B: "B",
};

type CartItem = {
  name: string;
  price: number;
  category: Category;
};

type Button = CartItem & {
  show_free_shopping_icon: () => void;
  hide_free_shopping_icon: () => void;
};

// A
let shopping_cart: CartItem[] = [];

// A
document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target: aTarget }) => {
    const target = aTarget as HTMLButtonElement;
    const item = get_item_from_element(target);
    add_item_to_cart(item);
  })
);

// C - item
const make_item = ({
  name: aName,
  category: aCategory,
  price: aPrice,
}: {
  name: string;
  category: string;
  price: string | number;
}): CartItem => {
  if (CATEGORY_MAP[aCategory] === undefined) {
    throw Error("make_item: category 타입이 적절하지 않음");
  }
  return {
    name: aName,
    category: aCategory as Category,
    price:
      typeof aPrice === "number"
        ? aPrice
        : Number(convert_string_to_number_only(aPrice)),
  };
};

// A
const get_item_from_element = (element: HTMLElement) => {
  const name = element.parentNode.querySelector(".menu-name").textContent;
  const category = element.parentNode.querySelector(".category").textContent;
  const price = element.parentNode.querySelector(".price").textContent;

  if (typeof name !== "string") {
    throw new Error("make_item_from_dom: name 타입이 적절하지 않음");
  }
  if (typeof category !== "string") {
    throw new Error("make_item_from_dom: category 타입이 적절하지 않음");
  }
  if (typeof price !== "string") {
    throw new Error("make_item_from_dom: price 타입이 적절하지 않음");
  }

  return make_item({
    name,
    category,
    price,
  });
};

// A
const add_item_to_cart = (item: CartItem) => {
  const next_cart = add_item(shopping_cart, item);
  const shopping_cart_total = calc_cart_total_price(next_cart);

  update_shipping_icons(next_cart, shopping_cart_total);
  set_cart_total_dom(shopping_cart_total);
  update_tax_dom(shopping_cart_total);

  // 전역에 set
  shopping_cart = next_cart;
};

// A
const set_cart_total_dom = (cart_total: number) => {
  document.querySelector(".total-price").textContent =
    convert_number_to_price_format(cart_total);
};

// A
const update_shipping_icons = (cart: CartItem[], cart_total: number) => {
  const buy_buttons = get_buy_buttons_dom(cart);

  for (let i = 0; i < buy_buttons.length; i++) {
    const item = buy_buttons[i];
    const price = get_cart_price(item);
    const next_total = add(cart_total, price);

    gets_free_shipping(next_total, FREE_SHIPPING_PRICE)
      ? item.show_free_shopping_icon()
      : item.hide_free_shopping_icon();
  }
};

// A
const show_free_shopping_icon = (name: string) => {
  console.log(`'${name}' 주문시 무료배송!`);
};

// A
const hide_free_shopping_icon = (name: string) => {
  console.log(`'${name}' 주문시 무료배송 취소ㅠ`);
};

// A
const get_buy_buttons_dom = (cart: CartItem[]) => {
  const buttons: Button[] = [];

  for (let i = 0; i < cart.length; i++) {
    const buttonItem: Button = {
      ...cart[i],
      show_free_shopping_icon: () => show_free_shopping_icon(cart[i].name),
      hide_free_shopping_icon: () => hide_free_shopping_icon(cart[i].name),
    };
    buttons.push(buttonItem);
  }

  return buttons;
};

// A
const update_tax_dom = (calc_total: number) => {
  set_tax_dom(calc_total * TAX_SCALE);
};

// A
const set_tax_dom = (value: number) => {
  document.querySelector(".tax-price").textContent =
    convert_number_to_price_format(value);
};

// C - shipping
const gets_free_shipping = (addedPrice: number, freeShippingPrice: number) =>
  addedPrice >= freeShippingPrice;

// C - cart
const get_cart_price_list = (cart: CartItem[]) =>
  cart.map((item) => get_cart_price(item));

// C - cart
const get_cart_price = (item: CartItem) => item.price;

// C - cart
const calc_cart_total_price = (cart: CartItem[]) =>
  sum_array(get_cart_price_list(cart));

// C - cart
const add_item = (cart: CartItem[], item: CartItem) =>
  add_element_to_array(cart, item);

// C - util
const convert_number_to_price_format = (price: number) =>
  `${price.toLocaleString()}원`;

// C - util
const convert_string_to_number_only = (str: string) =>
  str.replace(/[^0-9]/g, "");

// C - util
const sum_array = (numArray: number[]) => numArray.reduce(add, 0);

// C - util
const add_element_to_array = <T>(array: T[], element: T) => [...array, element];

// C - util
const add = (num1: number, num2: number) => num1 + num2;

// D
const FREE_SHIPPING_PRICE = 20000;
const TAX_SCALE = 0.1;
