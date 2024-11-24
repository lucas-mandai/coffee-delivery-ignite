import { Trash } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";
import { Quantity } from "../../components/Quantity";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FormAddress } from "./components/FormAddress";
import { FormPaymentMethods } from "./components/FormPaymentMethods";

export enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export interface FormAdress {
  zipcode: string;
  city: string;
  complement: string;
  district: string;
  number: string;
  street: string;
  uf: string;
  paymentMethod: PaymentMethods;
}

const formAdressValidationSchema = zod.object({
  zipcode: zod.string().min(1, "CEP não informado"),
  city: zod.string().min(1, "Cidade não informada"),
  complement: zod.string(),
  district: zod.string().min(1, "Bairro não informado"),
  number: zod.string().min(1, "Número não informado"),
  street: zod.string().min(1, "Rua não informada"),
  uf: zod.string().min(2, "UF não informado"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export function Checkout() {
  const { cartItems, removeCoffeFromCart, changeCartItemQuantity, clearCart } =
    useCart();

  const confirmOrderForm = useForm<FormAdress>({
    resolver: zodResolver(formAdressValidationSchema),
    defaultValues: {
      city: "",
      complement: "",
      district: "",
      number: "",
      street: "",
      uf: "",
      paymentMethod: undefined,
    },
  });

  const { handleSubmit, reset } = confirmOrderForm;

  const shipping = 3.5;
  const totalItens = cartItems.reduce((acumulator, obj) => {
    return acumulator + obj.price * obj.quantity;
  }, 0);

  const totalFinal = totalItens + shipping;

  const existsItemsInCart = cartItems.length > 0;

  function onRemove(id: number) {
    removeCoffeFromCart(id);
  }

  function handleDecrease(id: number) {
    changeCartItemQuantity(id, "decrease");
  }

  function handleIncrease(id: number) {
    changeCartItemQuantity(id, "increase");
  }

  const navigate = useNavigate();

  function handleSubmitForm(data: FormAdress) {
    navigate("/success", {
      state: data,
    });

    reset();
    clearCart();
  }

  return (
    <form
      className="flex justify-between"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="flex flex-col gap-y-4">
        <FormProvider {...confirmOrderForm}>
          <FormAddress />
          <FormPaymentMethods />
        </FormProvider>
      </div>

      <div className="flex flex-col gap-y-3 md:w-[448px] bg-slate-100 p-8 borderCard">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b-2 py-2">
            <img src={`/coffees/${item.photo}`} className="w-[4rem]" />
            <div className="flex flex-col gap-2">
              <p>{item.name}</p>
              <div className="flex gap-2">
                <Quantity
                  quantity={item.quantity}
                  onDecrease={() => handleDecrease(item.id)}
                  onIncrease={() => handleIncrease(item.id)}
                />
                <button
                  onClick={() => onRemove(item.id)}
                  className="flex gap-1 items-center bg-purple-200 py-1 px-2 rounded-md"
                >
                  <Trash size={20} className="text-purple-500" />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <div className="font-bold text-xl text-slate-600">{`R$ ${(
              item.price * item.quantity
            ).toFixed(2)}`}</div>
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-slate-500">
            <p>Total de itens</p>
            <p>R$ {totalItens.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <p>Entrega</p>
            <p>R$ {shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center text-2xl">
            <p>Total</p>
            <p>R$ {totalFinal.toFixed(2)}</p>
          </div>
        </div>

        <button
          disabled={!existsItemsInCart}
          type="submit"
          className="w-full text-white text-center uppercase bg-yellow-500 p-2 rounded-md"
        >
          Confirmar Pedido
        </button>
      </div>
    </form>
  );
}
