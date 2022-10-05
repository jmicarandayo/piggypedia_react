import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { registerErrorCheck } from '../utils/AuthErrorCheck'
const Register = () => {
    const [ error, setError ] = useState({})
    const navigate = useNavigate();
    // Handle Email/Password Register
    const handleRegister = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        if(!displayName){
            return setError({message : 'Please enter your full name'})
        }
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(res.user, {
                displayName
            })
            navigate('/home');
            console.log(res)
        } catch(err) {
            setError(registerErrorCheck(err.message.split(' ').pop()))
        }
    }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-[450px] p-4'>
            <h1 className='text-[#377E51] text-4xl font-bold text-center my-8'>Create your account</h1>
            <div>
                <span className='text-gray-400 font-light text-sm'>Create account using</span>
                <div className='flex justify-between my-4 items-center'>
                    <button className='border-gray-300 h-[50px] group flex items-center gap-2 border py-3 px-8 sm:px-12 hover:bg-[#4285f4] hover:text-white text-[#4285f4] duration-200'><span className='group-hover:text-white duration-200'><FcGoogle size={25}/></span>Google</button>
                    <button className='border-gray-300 h-[50px] group flex items-center gap-2 border py-3 px-8 sm:px-12 hover:bg-[#3b5998] hover:text-white text-[#3b5998] duration-200'><span className='text-[#3b5998] group-hover:text-white duration-200'><GrFacebook size={25}/></span>Facebook</button>
                </div>
                <form onSubmit={handleRegister} className='flex flex-col gap-6'>
                    <input onChange={() => setError({})} className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="text" placeholder='Your full name'/>
                    <input onChange={() => setError({})} className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="text" placeholder='Your email address'/>
                    <input onChange={() => setError({})} className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="password" placeholder='Your password'/>
                    {error.message && <span className='text-red-600 p-3 bg-red-300 bg-opacity-10'>{error.message}</span>}
                    <button className='bg-[#00DDA2] text-white p-3 text-light'>Sign Up</button>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-400 '>Already have an account?<Link to='/login' className='text-[#377E51] ml-2'>Login</Link></p>
                        <Link className='text-[#377E51] text-sm underline'>Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register