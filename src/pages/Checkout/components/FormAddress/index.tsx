import { MapPinLine } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { ErrorsType } from "../..";




export function FormAddress() {

    const { register, formState } = useFormContext()
    const { errors } = formState as ErrorsType;

    return (
        <div className="flex flex-col gap-3 md:w-[640px] bg-slate-100  p-8 borderCard shadow-sm">
            <div className="flex gap-2 items-center">
                <MapPinLine size={24} className="text-yellow-600" />
                <span>Endereço de Entrega</span>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="CEP"
                        className="input-style w-1/3"
                        {...register('zipcode')}
                    />
                    {errors.zipcode?.message && <small className="text-red-400">{errors.zipcode?.message} </small>}
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Rua"
                        className="input-style w-full"
                        {...register('street')}
                    />
                    {errors.street?.message && <small className="text-red-400">{errors.street?.message} </small>}
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col w-1/3">
                        <input
                            type="text"
                            placeholder="Número"
                            className="input-style"
                            {...register('number')}
                        />
                        {errors.number?.message && <small className="text-red-400">{errors.number?.message} </small>}
                    </div>
                    <div className="flex flex-col w-2/3">
                        <input
                            type="text"
                            placeholder="Complemento (opcional)"
                            className="input-style"
                            {...register('complement')}
                        />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className=" flex flex-col w-5/12">
                        <input
                            type="text"
                            placeholder="Bairro"
                            className="input-style"
                            {...register('district')}
                        />
                        {errors.district?.message && <small className="text-red-400">{errors.district?.message} </small>}
                    </div>
                    <div className=" flex flex-col w-6/12">
                        <input
                            type="text"
                            placeholder="Cidade"
                            className="input-style"
                            {...register('city')}
                        />
                        {errors.city?.message && <small className="text-red-400">{errors.city?.message} </small>}
                    </div>
                    <div className=" flex flex-col w-1/12">
                        <input
                            type="text"
                            placeholder="UF"
                            className="input-style"
                            {...register('uf')}
                        />
                        {errors.uf?.message && <small className="text-red-400">{errors.uf?.message} </small>}
                    </div>
                </div>
            </div>
        </div>
    )
}