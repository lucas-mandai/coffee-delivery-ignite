import { ShoppingCart } from "@phosphor-icons/react"
import heroImage from "../../../../assets/heroImage.png"

export function Hero() {
    return (
        <div className="flex items-center justify-between gap-x-5 py-10">
            <div className="md:w-[55%]">
                <h1 className="text-5xl font-semibold mb-6">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-xl">Com o Coffee Delivery você recebe seu café onde estiverm a qualquer hora</p>
                <div className="grid grid-cols-2 mt-10 gap-y-4">
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center bg-yellow-600 rounded-full w-8 h-8">
                            <ShoppingCart size={20} weight="fill" className="text-white" />
                        </div>
                        <p>Compra simples e segura</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center bg-yellow-600 rounded-full w-8 h-8">
                            <ShoppingCart size={20} weight="fill" className="text-white" />
                        </div>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center bg-yellow-600 rounded-full w-8 h-8">
                            <ShoppingCart size={20} weight="fill" className="text-white" />
                        </div>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center bg-yellow-600 rounded-full w-8 h-8">
                            <ShoppingCart size={20} weight="fill" className="text-white" />
                        </div>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[45%]">
                <img src={heroImage} className="w-full" alt="" />
            </div>
        </div>
    )
}