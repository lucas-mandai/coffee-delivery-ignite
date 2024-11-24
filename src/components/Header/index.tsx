import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import logoCoffee from "../../assets/logoCoffee.png"
import { useCart } from "../../hooks/useCart"
import { NavLink } from "react-router-dom"

export function Header() {

    const { totalCartItems } = useCart()

    return (
        <div className="flex justify-between items-center h-[104px]">
            <NavLink to="/">
                <img src={logoCoffee} alt="" />
            </NavLink>
            <div className="flex gap-3">
                <div className="flex items-center rounded-md bg-violet-200 p-2 gap-1">
                    <MapPin size={18} className="text-violet-600" weight="fill" />
                    <p className="text-violet-600 font-semibold text-sm">Lins - SP</p>
                </div>
                <NavLink to="/checkout">
                    <div className="flex relative p-2 bg-yellow-100 rounded-md">
                        <span className="text-white text-[0.72rem] font-semibold flex justify-center items-center bg-yellow-600  p-1 w-6 h-6 rounded-full absolute top-[-14px] right-[-10px]">{totalCartItems}</span>
                        <ShoppingCart size={24} weight="fill" className="text-yellow-600 cursor-pointer" />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}