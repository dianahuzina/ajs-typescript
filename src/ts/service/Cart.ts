import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  delete(id: number): void {
    const itemId = this._items.findIndex((item) => {
      return item.id === id;
    });
    this._items.splice(itemId, 1);
  }

  totalAmount(): number {
    return this._items.reduce((acc, index) => acc + index.price, 0)
  }

  amountWithDiscount(discount: number): number {
    return this._items.reduce((acc, index) => {
      const result = acc + index.price * (discount / 100);
      return index.price - result;
    }, 0)
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}