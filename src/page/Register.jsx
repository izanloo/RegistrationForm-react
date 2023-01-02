import imgRegister from '../assest/images/img-page-resister.webp'
import { LabelError, LabelInput } from "../components/Labels";
import imgDefault from '../assest/images/profile-gray.webp'
import TableDataUser from "../components/TableDataUser";
import { ErrorMessage } from "@hookform/error-message";
import Toastify from "../components/Toastify";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Register() {
    const [dataUser, setDataUser] = useState([])

    // useform for get value inputs and handle error validation
    const { register, formState: { errors }, handleSubmit } = useForm();

    //upload image and show image in form--photo should not be larger than 1Mb and only jpg files----------------------------------
    const imgProfile = register("imgProfile", { required: "img is required" })
    const [mydata, setData] = useState('')
    const [check, setCheck] = useState(false)

    const handleImageUpload = (event) => {
        let file = event.target.files[0];
        const extension = file.name.split('.').pop().toLowerCase();
        if (extension == 'jpg') {
            if (file.size < 1000) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    setData({
                        ...mydata,
                        imagePreview: reader.result,
                        file: file
                    });
                };
                reader.readAsDataURL(file);
                setCheck(true)
            } else {
                toast.error("photo should not be larger than 1Mb");
            }
        } else {
            toast.error("photo only jpg files")
        }
        setData('')

    }
    // handleSubmit----------------------------------------
    const onSubmit = (data) => {
        if (data.Age < 18 || data.Age < 0) {
            toast.error("age should not be less than 18 :)")
        } else if (check) {
            setDataUser(data)
        } else {
            toast.error("please enter phoo!!!!")
        }
    }
    return (
        <>
            <div className="md:w-full h-screen px-2 sm:px-20 md:px-10 px-lg-20 lg:max-w-70 flex items-center">
                <div className="md:grid md:grid-cols-2 bg-white border-black border-1 rounded-lg shadow-md lg:shadow-lg">
                    <div className="hidden md:flex items-center">
                        <img src={imgRegister} alt="img register" />
                    </div>
                    {dataUser != '' ? <TableDataUser dataUser={dataUser} mydata={mydata} /> :

                        <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-tr-lg rounded-br-lg shadow">
                            <div className="py-4 px-8 ">
                                <div className="flex flex-col items-center mb-3">
                                    <label htmlFor="file" className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center " >
                                    <img  className="block w-36 h-36 border border-black object-cover border-dashed rounded-full text-center " src={mydata != '' ? `${mydata.imagePreview}` : `${imgDefault}`}/>
                                    </label>
                                    <input type="file" accept=".jpg" id="file" className="hidden" name="imgProfile" {...imgProfile} onChange={e => { handleImageUpload(e) }} />
                                    <ErrorMessage errors={errors} name="imgProfile" render={({ message }) => <LabelError msg={message} />} />
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <LabelInput name="First Name" htmlFor="firstName" />
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstName" type="text" placeholder="first name" {...register("firstName", { required: "firstName is required" })} />
                                        <ErrorMessage errors={errors} name="firstName" render={({ message }) => <LabelError msg={message} />} />
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <LabelInput htmlFor="lastName" name="Last Name" />
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="lastName" type="text" placeholder="last name" {...register("lastName", { required: "lastName is required" })} />
                                        <ErrorMessage errors={errors} name="lastName" render={({ message }) => <LabelError msg={message} />} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <LabelInput htmlFor="dateBirth" name="Date Birth" />
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="dateBirth" type="date"  {...register("dateBirth", { required: "lastName is required" })} />
                                    <ErrorMessage errors={errors} name="dateBirth" render={({ message }) => <LabelError msg={message} />} />
                                </div>
                                <div className="mb-4">
                                    <LabelInput htmlFor="Age" name="Age" />
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Age" type="number" placeholder="Age" {...register("Age", { required: "Age is required" })} />
                                    <ErrorMessage errors={errors} name="Age" render={({ message }) => <LabelError msg={message} />} />
                                </div>
                                <div className="flex items-center justify-between mt-8">
                                    <input type="submit" className="cursor-pointer bg-sky-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" value='Sign Up' />
                                </div>
                                <Toastify />
                            </div>
                        </form>
                    }
                </div>
            </div>

        </>
    )
}