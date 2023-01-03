import imgRegister from '../assest/images/img-page-resister.webp'
import { LabelError, LabelInput } from "../components/Labels";
import imgDefault from '../assest/images/profile-gray.webp'
import TableDataUser from "../components/TableDataUser";
import { ErrorMessage } from "@hookform/error-message";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import Toastify from "../components/Toastify";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useState } from "react";

// import DateBirth from '../components/DateBirth';

export default function Register() {
    const ageRestriction = new Date().setFullYear(new Date().getFullYear() - 18);

    const [dataUser, setDataUser] = useState([])

    // useform for get value inputs and handle error validation
    const { register, control, formState: { errors }, handleSubmit } = useForm();

    //upload image and show image in form--photo should not be larger than 1Mb and only jpg files----------------------------------
    const IdPhoto = register("IdPhoto", { required: "Id Photo is required" })
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
                setCheck(false)
            }
        } else {
            toast.error("photo only jpg files")
            setCheck(false)
        }
        setData('')
    }
    // handleSubmit----------------------------------------
    const onSubmit = (data) => {
        if (check == false) {
            toast.error("please enter phoo!!!!")
        } else {
            setDataUser(data)
        }
    }

    return (
        <div className="md:w-full h-screen px-2 sm:px-20 md:px-10 px-lg-20 lg:max-w-70 flex items-center">
            <div className="md:grid md:grid-cols-2 bg-white border-black border-1 rounded-lg shadow-md lg:shadow-lg">
                <div className="hidden md:flex items-center">
                    <img src={imgRegister} alt="Id photo" />
                </div>
                {dataUser != '' ? <TableDataUser dataUser={dataUser} mydata={mydata} /> :
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-tr-lg rounded-br-lg shadow">
                        <div className="py-4 px-8 ">
                            <div className="flex flex-col items-center mb-3">
                                <label htmlFor="file" className="cursor-pointer block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center " >
                                    <img className="block w-36 h-36 border border-black object-cover border-dashed rounded-full text-center " src={mydata != '' ? `${mydata.imagePreview}` : `${imgDefault}`} />
                                </label>

                                <input type="file" accept=".jpg" id="file" className="hidden" name="IdPhoto"
                                    {...IdPhoto} onChange={e => { handleImageUpload(e) }} />
                                {check ? <></> : <ErrorMessage errors={errors} name="IdPhoto" render={({ message }) => <LabelError msg={message} />} />}
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <LabelInput name="Name" htmlFor="Name" />
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Name" type="text" placeholder="Name"
                                        {...register("Name", { required: "Name is required" })} />
                                    <ErrorMessage errors={errors} name="Name" render={({ message }) => <LabelError msg={message} />} />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <LabelInput htmlFor="Family" name="Family" />
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Family" type="text" placeholder="Family"
                                        {...register("Family", { required: "Family is required" })} />
                                    <ErrorMessage errors={errors} name="Family" render={({ message }) => <LabelError msg={message} />} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <LabelInput htmlFor="Gender" name="Gender" />
                                <select className='border rounded w-full py-2 px-3 text-grey-darker"'   {...register("Gender", { required: "Gender is required." })}  >
                                    <option value="" selected disabled >gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                                <ErrorMessage errors={errors} name="Gender" render={({ message }) => <LabelError msg={message} />} />
                            </div>
                            <div className="mb-4">
                                <LabelInput htmlFor="dateBirth" name="Date of birth" />
                                <Controller
                                    control={control}
                                    name='dateBirth'
                                    {...register("dateBirth", { required: "Date of birth is required" })}
                                    render={({ field }) => (
                                        <>
                                            <DatePicker
                                                placeholderText='Must be over 18 years old'
                                                onChange={(date) => field.onChange(date)}
                                                selected={field.value}
                                                maxDate={ageRestriction}
                                                dateFormat="MMMM d, yyyy"
                                                showYearDropdown="true"
                                                className='border rounded w-full py-2 px-3 text-grey-darker'
                                            />
                                        </>
                                    )}
                                />
                                <ErrorMessage errors={errors} name="dateBirth" render={({ message }) => <LabelError msg={message} />} />
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
    )
}