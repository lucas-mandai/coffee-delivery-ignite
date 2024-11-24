import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "../../../../../hooks/useCart";
import { Quantity } from "../../../../../components/Quantity";
import { toast } from "sonner";



export interface Coffee {
    id: number,
    name: string,
    tags: string[],
    description: string,
    photo: string,
    price: number,
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState<number>(1)
    // const [cart, setCart] = useState<Coffee[]>([])

    const { addCoffeeToCart } = useCart()

    //junta os itens do array dando um espaço entra cada item
    const stringTags = coffee.tags.join(" ");

    const handleDecrease = () => {
        setQuantity((quantity) => {
            if (quantity === 1) {
                return quantity
            }
            return quantity - 1
        })
    }

    const handleIncrease = () => {
        setQuantity((q) => q + 1)
    }

    const handleAddToCart = () => {
        const coffeeToAdd = {
            ...coffee,
            quantity
        }
        addCoffeeToCart(coffeeToAdd)
        toast.success('Added to cart')
    }

    return (

        <div className="flex flex-col justify-self-center w-[256px] bg-slate-100 shadow-md p-5 gap-y-1 borderCard justify-center items-center">
           
            <img className="mt-[-50px]" src={`/coffees/${coffee.photo}`} alt="" />

            <div className="bg-yellow-100 rounded-lg text-yellow-700 text-xs uppercase font-bold py-1 px-3 my-3">{stringTags}</div>

            <h3 className="font-bold text-xl">{coffee.name}</h3>
            <p className="text-center text-md">{coffee.description}</p>

            <div className="flex w-full justify-between items-center  mt-8">
                <div className="flex items-end gap-1">
                    <span className="font-semibold">R$</span>
                    <span className="font-bold text-xl">{coffee.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Quantity quantity={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
                    <button className="bg-purple-700 p-1 rounded-md active:opacity-50 transition-opacity duration-300" onClick={handleAddToCart} disabled={quantity < 1}>
                        <ShoppingCart size={24} weight="fill" className="text-white" />
                    </button>
                </div>
            </div>
        </div>

    )
}