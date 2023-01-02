import { LabelInput } from "./Labels";
import { toast } from 'react-toastify';
import Toastify from "./Toastify";
import FormData from 'form-data'
import axios from 'axios'

export default function TableDataUser(props) {
  const userData = props.dataUser
  const userImg = props.mydata

  // Send user information to the address https://cd.amwajco.net/assignment.php------
  const postData = () => {
    const formData = new FormData();

    axios.post(`https://cd.amwajco.net/assignment.php`, {
      "firstName": userData.firstName,
      "lastName": userData.lastName,
      "dateBirth": userData.dateBirth,
      "age": userData.Age,
      "image": formData
    },
      {
        headers: { "Content-Type": "multipart/form-data", }
      }).then(res => {
        if (res.status == 200 || 201) {
          toast.success("Your registration was successful :)")
        }
      })
      .catch(res => {
        console.log(res);
        toast.error("Unfortunately, a problem has occurred ♥ !!")
      });
  }

  return (
    <div className="w-full rounded-tr-lg rounded-br-lg py-5 text-xl h-[500px] px-5 flex flex-col items-center md:block">
      <h3 className="bold text-xl">You confirm the information?</h3>
      <img className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center my-5" src={userImg.imagePreview} />
      <div className="flex items-center">
        <LabelInput name="First Name" />
        <label> : {userData.firstName}</label>
      </div>
      <div className="flex items-center my-5">
        <LabelInput name="Last Name" />
        <label> : {userData.lastName}</label>
      </div>
      <div className="flex items-center">
        <LabelInput name="Date Birth " />
        <label> : {userData.dateBirth}</label>
      </div>
      <div className="flex items-center my-5">
        <LabelInput name="Age " />
        <label> : {userData.Age}</label>
      </div>
      <button className="bg-green-400  text-white rounded-lg py-2 px-5" onClick={postData}>yes</button>
      <Toastify />
    </div>
  );
}