import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { ErrorsType, PaymentMethods } from "../..";



export function FormPaymentMethods() {

    const {register, formState, watch} = useFormContext()
    const { errors } = formState as ErrorsType;

    return (
        <div className="flex flex-col gap-3 md:w-[640px] bg-slate-100 p-8 borderCard shadow-sm">
            <div className="flex gap-1">
                <CurrencyDollar size={24} className="text-purple-500" />
                <span>Pagamento</span>
            </div>
            <div className="flex justify-between items-center uppercase text-sm text-slate-600 gap-2">
                <label className={`cursor-pointer flex flex-1 items-center gap-2 bg-purple-200 rounded-md p-3 ${watch("paymentMethod") === "credit" ? "border-2 border-purple-500" : ""}`}>
                    <input
                        type="radio"
                        className="hidden"
                        value={PaymentMethods.credit}
                        {...register("paymentMethod")}
                    />
                    <CreditCard size={20} className="text-purple-600" />
                    <p>Cartão de crédito</p>
                </label>
                <label className={`cursor-pointer flex flex-1 items-center gap-2 bg-purple-200 rounded-md p-3 ${watch("paymentMethod") === "debit" ? "border-2 border-purple-500" : ""}`}>
                    <input
                        type="radio"
                        className="hidden"
                        value={PaymentMethods.debit}
                        {...register("paymentMethod")}
                    />
                    <Bank size={20} className="text-purple-600" />
                    <p>Cartão de débito</p>
                </label>
                <label className={`cursor-pointer flex flex-1 items-center gap-2 bg-purple-200 rounded-md p-3 ${watch("paymentMethod") === "money" ? "border-2 border-purple-500" : ""}`}>
                    <input
                        type="radio"
                        className="hidden"
                        value={PaymentMethods.money}
                        {...register("paymentMethod")}
                    />
                    <Money size={20} className="text-purple-600" />
                    <p>Dinheiro</p>
                </label>
            </div>
            <small className="text-red-500">{errors.paymentMethod?.message}</small>
        </div>
    )
}