import { cartItemStore } from '../store.js';
import { calculateCartTotals } from '../modules/calculateCartTotals.js';

export function handleRemoveCartItem(event) {
  const target = event.target;

  cartItemStore.setState((prevState) => {
    const updatedCartItems = prevState.cartItems.filter(
      (item) => item.id !== target.dataset.itemId
    );

    return { cartItems: updatedCartItems };
  });

  calculateCartTotals();
}
