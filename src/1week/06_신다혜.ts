type CartItem = {
  price: number;
  name: string;
};

type BuyButton = {
  item: CartItem;
  show_free_shipping_icon: () => void;
  hide_free_shipping_icon: () => void;
};

// A - 변경 가능한 전역 변수
let shopping_cart: CartItem[] = [];

// A - 전역 변수를 참조하는 함수, 사이드 이펙트를 참조하는 함수
export const add_item_to_cart = (name: string, price: number) => {
  shopping_cart = add_Item(shopping_cart, name, price);
  calc_cart_total(shopping_cart);
};

// A - 액션 함수를 호출
export const update_shipping_icons = (carts: CartItem[]) => {
  const buy_buttons = get_buy_button_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;
    const shopping_cart_total = calc_shopping_cart_total(carts);

    if (gets_free_shipping(item.price, shopping_cart_total)) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
};

// A - 전역 변수를 참조하는 함수
export const update_tax_dom = (carts: CartItem[]) => {
  const shopping_cart_total = calc_shopping_cart_total(carts);
  set_tax_dom(calc_tax(shopping_cart_total));
};

// A - 전역 변수를 변경하는 함수
export const calc_cart_total = (carts: CartItem[]) => {
  set_cart_total_dom();
  update_shipping_icons(carts);
  update_tax_dom(carts);
};

// A - Dom을 바꾸는 사이드 이펙트가 있는 함수
export const set_tax_dom = (tax: number) => {
  // ...Dom 조작...
};
// A - Dom을 바꾸는 사이드 이펙트가 있는 함수
export const set_cart_total_dom = () => {
  // ...Dom 조작...
};
// A - Dom 호출 시점에 대한 영향을 받는 함수
export const get_buy_button_dom = (): BuyButton[] => {
  // ...Dom 에서 꺼내오기(호출 시점의 영향을 받음)...
  return [];
};

// C - 비즈니스 규칙 분리 된 계산
export const calc_tax = (amount: number) => {
  return amount * 0.1;
};

// C - 명시적인 입출력의 계산
export const add_Item = (cart: CartItem[], name: string, price: number) => {
  return [...cart, { name, price }];
};

// C - 명시적인 입출력의 계산
export const calc_shopping_cart_total = (carts: CartItem[]) => {
  return carts.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};

// C - 배송팀에서 사용하는 비즈니스 규칙 분리
const gets_free_shipping = (item_price: number, total: number) => {
  return item_price + total >= MIN_ITEM_PRICE;
};

// D - 해석이 필요한 데이터
const MIN_ITEM_PRICE = 20;
