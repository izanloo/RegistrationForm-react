import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { BiErrorCircle } from "react-icons/bi";
import imgRegister from '../assest/images/img-page-resister.webp'
import imgDefault from '../assest/images/profile-gray.webp'


export default function Register() {
    // useform for get value inputs and handle error validation
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="md:w-full  h-[100vh] px-2 sm:px-20 md:px-10 px-lg-20 lg:max-w-[70%] flex items-center">
            <div className="md:grid md:grid-cols-2 bg-white border-black border-1 rounded-lg">
                <div className="hidden md:flex items-center">
                    <img src={imgRegister} alt="img register" />
                </div>
                <div className="w-full rounded-tr-lg rounded-br-lg shadow">
                    <div className="py-4 px-8 ">
                        <div className="flex justify-center mb-3">
                            <label for="file" className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center " style={{ backgroundImage: `url(${imgDefault})` }}>
                            </label>
                            <input type="file" id="file" className="hidden" name="thumbnail" />
                            <ErrorMessage errors={errors} name="thumbnail" render={({ message }) => <p className="text-red-700 pt-2 flex items-center"><BiErrorCircle />{message}</p>} />
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-1">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="first name" />
                            </div>
                            <div className="w-1/2 ml-1">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="last name" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Date of birth</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="date" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="Age">Age</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Age" type="number" placeholder="Age" />
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <input type="submit" className="bg-sky-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" value='Sign Up' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}