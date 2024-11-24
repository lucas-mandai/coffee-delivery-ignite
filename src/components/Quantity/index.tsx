import { Minus, Plus } from "@phosphor-icons/react";

interface QuantityProps{
    onDecrease: (id?: number) => void
    onIncrease: (id?: number) => void
    quantity: number
}

export function Quantity({onDecrease, onIncrease, quantity}: QuantityProps) {
   

    return (
        <div className="flex p-1  gap-2 items-center rounded-md bg-purple-200">
            <Minus onClick={() => onDecrease()} size={18} className="text-purple-500 cursor-pointer" weight="bold" />
            <p>{quantity}</p> 
            <Plus onClick={() => onIncrease()} size={18} className="text-purple-500 cursor-pointer" weight="bold" />
        </div>
    )
}