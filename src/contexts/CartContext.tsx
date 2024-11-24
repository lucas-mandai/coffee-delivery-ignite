import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/HomePage/components/OurCoffee/CoffeeCard";
import { produce } from "immer";

interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProvideProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  totalCartItems: number;
  removeCoffeFromCart: (id: number) => void;
  changeCartItemQuantity: (id: number, type: "increase" | "decrease") => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProvideProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalCartItems = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function removeCoffeFromCart(idCartItem: number) {
    const removeFromCart: CartItem[] = cartItems.filter(
      (item) => item.id !== idCartItem
    );
    setCartItems(removeFromCart);
  }

  function changeCartItemQuantity(id: number, type: "increase" | "decrease") {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === id
    );

    const newCart = produce(cartItems, (draft) => {
      if (type === "increase") {
        draft[coffeeAlreadyExistsInCart].quantity += 1;
      } else {
        if (draft[coffeeAlreadyExistsInCart].quantity === 1) {
          return;
        }
        draft[coffeeAlreadyExistsInCart].quantity -= 1;
      }
    });

    setCartItems(newCart);
  }

  // New function to clear the cart
  function clearCart() {
    setCartItems([]); // Reset cartItems to an empty array
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        totalCartItems,
        removeCoffeFromCart,
        changeCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
