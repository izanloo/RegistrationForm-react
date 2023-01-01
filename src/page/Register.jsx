import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import imgRegister from '../assest/images/img-page-resister.webp'
import imgDefault from '../assest/images/profile-gray.webp'
import {LabelError,LabelInput} from "./components/Labels";


export default function Register() {
    // useform for get value inputs and handle error validation
    const { register, formState: { errors }, handleSubmit } = useForm();

    //upload image and show image in form------------------------------------
    const imgProfile = register("imgProfile", { required: "img is required" })
    const [mydata, setData] = useState('')
    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                setData({
                    ...mydata,
                    imagePreview: reader.result,
                    file: file
                });
            };
            reader.readAsDataURL(file);
        }
    }

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="md:w-full h-screen px-2 sm:px-20 md:px-10 px-lg-20 lg:max-w-70 flex items-center">
            <div className="md:grid md:grid-cols-2 bg-white border-black border-1 rounded-lg shadow-md lg:shadow-lg">
                <div className="hidden md:flex items-center">
                    <img src={imgRegister} alt="img register" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-tr-lg rounded-br-lg shadow">
                    <div className="py-4 px-8 ">
                        <div className="flex flex-col items-center mb-3">
                            <label htmlFor="file" className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center " style={{ backgroundImage: mydata !='' ? `url(${mydata.imagePreview})` : `url(${imgDefault})` }}></label>
                            <input type="file" id="file" className="hidden" name="imgProfile" {...imgProfile} onChange={e => { imgProfile.onChange(e); handleImageUpload(e) }} />
                            <ErrorMessage errors={errors} name="imgProfile" render={({ message }) => <LabelError msg={message} />} />
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-1">
                                <LabelInput name="First Name" htmlFor="firstName"/>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstName" type="text" placeholder="first name" {...register("firstName", { required: "firstName is required" })} />
                                <ErrorMessage errors={errors} name="firstName" render={({ message }) => <LabelError msg={message} />} />
                            </div>
                            <div className="w-1/2 ml-1">
                                <LabelInput htmlFor="lastName" name="Last Name"/>
                                <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="lastName" type="text" placeholder="last name" {...register("lastName", { required: "lastName is required" })} />
                                <ErrorMessage errors={errors} name="lastName" render={({ message }) => <LabelError msg={message} />} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <LabelInput htmlFor="dateBirth" name="Date Birth"/>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="dateBirth" type="date"  {...register("dateBirth", { required: "lastName is required" })} />
                            <ErrorMessage errors={errors} name="dateBirth" render={({ message }) => <LabelError msg={message} />} />
                        </div>
                        <div className="mb-4">
                            <LabelInput htmlFor="Age" name="Age"/>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Age" type="number" placeholder="Age" {...register("Age", { required: "Age is required" })} />
                            <ErrorMessage errors={errors} name="Age" render={({ message }) => <LabelError msg={message} />} />
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <input type="submit" className="bg-sky-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" value='Sign Up' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}