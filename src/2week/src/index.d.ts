declare type Item = {
  name: string;
  category: string;
  price: number;
};
declare type ItemBuyButton = {
  show_free_shopping_icon: () => void;
  hide_free_shopping_icon: () => void;
} & Item;
