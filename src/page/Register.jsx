import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { BiErrorCircle } from "react-icons/bi";

export default function Register() {
    // useform for get value inputs and handle error validation
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block mb-2" htmlFor="username">name</label>
            <input className='w-full p-2  border border-gray-400 rounded-lg bg-gray-100'
                {...register("username", {
                    required: "نام کابری را وارد کنید"
                })}
            />
            <ErrorMessage errors={errors} name="username" render={({ message }) => <p className="text-red-700 pt-2 flex items-center"><BiErrorCircle />{message}</p>} />
            <input type="submit" className="w-full text-white bg-[#8c2973] font-bold py-2 px-4 my-6 rounded-lg" value="ورود" />

        </form>
    )
}