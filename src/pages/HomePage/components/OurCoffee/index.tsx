import { CoffeeCard } from "./CoffeeCard";
import { coffees } from "../../../../data/coffees"
import { Toaster } from "sonner";

export function OurCoffee() {
    return (
        <div className="mb-10">
            <Toaster closeButton richColors />
            <h2 className="text-2xl font-bold mb-12">Nossos cafés</h2>
            <div className="grid md:grid-cols-4 gap-y-12">
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))
                }
            </div>
        </div>
    )
}