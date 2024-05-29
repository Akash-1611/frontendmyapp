
import React, {useEffect, useState} from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";
import Avatar from '../components/Avatar';
import { useDispatch } from 'react-redux'
import { setToken, setUser} from '../redux/userSlice'




const CheckPasswordPage = () => {
  const[data,setData] = useState({
    
    password: "",
    userId : ""
   
  })

const navigate = useNavigate()
const location = useLocation()
const dispatch = useDispatch()




useEffect(()=>{
   if(!location?.state?.name){
    navigate('/email')
   }
}
,[])

 const handleOnChange = (e) => {
  const { name, value} = e.target

  setData((preve)=>{
    return{
      ...preve,
      [name] : value
    }
  })
 }


 
 const handleSubmit = async(e) => {
  e.preventDefault()
  e.stopPropagation()

 const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`
 try {
      const response = await axios({
        method : 'post',
        url : URL,
        
        data : {
          userId: location?.state?._id,
        password : data.password
        },
        withCredentials : true
      })
      
      toast.success(response.data.message)
     


      if(response.data.success){
      dispatch(setToken(response?.data?.token)) 
       localStorage.setItem('token',response?.data?.token)

        setData({
          
          password: "",
          
        })
        navigate('/')
      }

 } catch (error) {
   toast.error(error?.response?.data?.message)
 }
  
}
  return (
    <div className = 'mt-5  '>
    <div className = 'bg-blue-400 w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>
      
      <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
     <Avatar
     width ={70}
     height = {70}
     name ={location?.state?.name}
     imageUrl={location?.state?.profile_pic}/>
     <h2 className='font-semibold text-lg mt-1'>
      {location?.state?.name}
     </h2>
      </div>
     
     
     
     <h3>
       WELCOME TO CHAT APP BY AK
     </h3>
     <form className='grid gap-3 mt-2' onSubmit={handleSubmit} >
      

       <div className='flex flex-col gap-1'>
         <label htmlFor='password'>Password :</label>
         <input
         type='password'
         id = 'password'
         name='password'
         placeholder='enter your password'
         className = 'bg-slate-100 px-2 py-1'
         value={data.password}
         onChange={handleOnChange}
         required
         /> 
       </div>


     


      

      <button
      className='bg-white text-lg px-4 px-1 hover:bg-slate-100 rounded mt-2 font-bold  leading-relaxed tracking-wide'
      >
       Login
      </button>

     </form>

     <p className='my-3 text-center'>Enjoy..!! <Link to = {"/forgot-password"} className='hover:text-white hover:underline font-bold' >Forgot Password ?</Link></p>
    </div>
   </div>
  )
}

export default CheckPasswordPage


















