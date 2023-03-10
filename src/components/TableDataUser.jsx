import { toast } from 'react-toastify';
import Toastify from "./Toastify";
import FormData from 'form-data'
import axios from 'axios'
import { useContext } from 'react';
import { AppContext } from '../context/Context';

export default function TableDataUser(props) {
    const {dataUser,mydata} = useContext(AppContext)

// Send user information to the address https://cd.amwajco.net/assignment.php------
const postData = () => {
  const formData = new FormData();

  axios.post(`https://cd.amwajco.net/assignment.php`, {
    "Name": dataUser.Name,
    "Family": dataUser.Family,
    "Gender": dataUser.Gender,
    "dateBirth": dataUser.dateBirth,
    "IdPhoto": formData
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
    <img className="block w-36 h-36 border border-black bg-cover border-dashed rounded-full text-center my-5" src={mydata.imagePreview} />
    <table className="text-xl">
      <tbody>
        <tr>
          <td className="font-bold">Name:</td>
          <td>{dataUser.Name}</td>
        </tr>
        <tr>
          <td className="font-bold">Family:</td>
          <td>{dataUser.Family}</td>
        </tr>
        <tr>
          <td className="font-bold">Gender:</td>
          <td>{dataUser.Gender}</td>
        </tr>
        <tr>
          <td className="font-bold">Date of birth:</td>
          <td className="text-xl flex-row-reverse">{dataUser.dateBirth.toLocaleDateString()}</td>
        </tr>
      </tbody>
    </table>
    <button className="bg-green-400  text-white rounded-lg py-2 px-5" onClick={postData}>yes</button>
    <Toastify />
  </div>
);
}