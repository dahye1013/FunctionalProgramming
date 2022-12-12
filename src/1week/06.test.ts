import { add_Item } from "./06";

describe('shipping cart', () => {
  const shopping_cart = [];

  it('add_Item', () => {
    const price = 1000
    const name = 'new Item'
    expect(add_Item([], name, price)).toEqual([{ name, price }]);
  })

  it('add_item_to_cart', () => {
  })
})
