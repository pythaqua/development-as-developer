class CartStorage {
  constructor() {
    this.exists = Object.keys(sessionStorage).includes('cart');
    this.items = [];
    this.load();
  }

  load() {
    if (this.exists) {
      this.items = JSON.parse(sessionStorage.getItem('cart'));
    }
  }

  save() {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  clear() {
    sessionStorage.removeItem('cart');
  }

  getIndexOf(item) {
    return this.items.findIndex(({ id }) => (id === item.id));
  }

  add(item) {
    const existingIndex = this.getIndexOf(item);
    if (existingIndex >= 0) {
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    this.save();
  }
}

export default new CartStorage();
