import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart(){
    const context = useContext(CartContext)
   
    if(context === undefined) {
        throw new Error('Não está dentro do contexto')
    }
    
    return context
}