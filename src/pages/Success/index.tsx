import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import successShippingImg from '../../assets/successShippingImg.png'
import { useLocation } from 'react-router-dom';
import { FormAdress } from '../Checkout';

interface LocationType {
    state: FormAdress;
}

export function Success() {

    const { state } = useLocation() as unknown as LocationType;

    return (
        <div className="flex justify-between">
            <div>
                <h2 className='text-3xl font-semibold text-yellow-600'>Uhu! Pedido confirmado</h2>
                <p className='text-lg'>Agora é só aguardar que logo o café chegará até você</p>
                <div className='flex flex-col gap-8 p-8 border-2 w-full mt-8 borderCard'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-purple-600 p-1 rounded-full'>
                            <MapPin size={24} color="#fafafa" weight="fill" />
                        </div>
                        <div>
                            <p>Entrega em <b>{state.street}, {state.number}</b> </p>
                            <p>{state.district}, {state.city} - <span className='uppercase'>{state.uf}</span></p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-purple-600 p-1 rounded-full'>
                            <Timer size={24} color="#fafafa" weight="fill" />
                        </div>
                        <div>
                            <p>Previsão de Entrega</p>
                            <b>20 min - 30 min </b>
                        </div>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-purple-600 p-1 rounded-full'>
                            <CurrencyDollar size={24} color="#fafafa" />
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <b>{state.paymentMethod==="credit" ? 'Cartão de crédito' : state.paymentMethod==="debit" ? 'Cartão de débito' : 'Dinheiro'}</b>
                        </div>
                    </div>

                </div>
            </div>
            <img src={successShippingImg} alt="" />

        </div>
    )
}