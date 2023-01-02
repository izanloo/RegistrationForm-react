import { LabelInput } from "./Labels";
import FormData from 'form-data'
import axios from 'axios'
import Toastify from "./Toastify";
import { toast } from 'react-toastify';
import { DivData } from "./TagDiv";


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
      <div className="w-full rounded-tr-lg rounded-br-lg text-xl h-[500px]">
        <label htmlFor="file" className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center my-5" style={{ backgroundImage: `url(${userImg.imagePreview})` }}></label>
        <DivData>
          <LabelInput name="First Name" />
          <label> : {userData.firstName}</label>
        </DivData>
        <DivData className="my-5">
          <LabelInput name="Last Name" />
          <label> : {userData.lastName}</label>
        </DivData>
        <DivData>
          <LabelInput name="Date Birth " />
          <label> : {userData.dateBirth}</label>
        </DivData>
        <DivData className="my-5">
          <LabelInput name="Age " />
          <label> : {userData.Age}</label>
        </DivData>
        <button className="bg-green-400  text-white rounded-lg py-2 px-5" onClick={postData}>okay</button>
        <Toastify />
      </div>
  );
}