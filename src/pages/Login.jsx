import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { loginErrorCheck } from '../utils/AuthErrorCheck';

const Login = () => {
    const [ error, setError ] = useState({})
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            const res =await signInWithEmailAndPassword(auth, email, password)
            console.log(res)
            navigate('/home')
        } catch(err) {
            setError(loginErrorCheck(err.message.split(' ').pop()))
        }
    }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-[450px] p-4'>
            <h1 className='text-[#377E51] text-4xl font-bold text-center my-8'>Welcome</h1>
            <div>
                <span className='text-gray-400 font-light text-sm'>Log in with</span>
                <div className='flex justify-between my-4 items-center'>
                    <button className='border-gray-300 h-[50px] group flex items-center gap-2 border py-3 px-8 sm:px-12 hover:bg-[#4285f4] hover:text-white text-[#4285f4] duration-200'><span className='group-hover:text-white duration-200'><FcGoogle size={25}/></span>Google</button>
                    <button className='border-gray-300 h-[50px] group flex items-center gap-2 border py-3 px-8 sm:px-12 hover:bg-[#3b5998] hover:text-white text-[#3b5998] duration-200'><span className='text-[#3b5998] group-hover:text-white duration-200'><GrFacebook size={25}/></span>Facebook</button>
                </div>
                <form onSubmit={handleLogin} className='flex flex-col gap-6'>
                    <input className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="text" placeholder='Your email address'/>
                    <input className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="password" placeholder='Your password'/>
                    {error.message && <span className='text-red-600 p-3 bg-red-300 bg-opacity-10'>{error.message}</span>}
                    <button className='bg-[#00DDA2] text-white p-3 text-light'>Login</button>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-400 '>Need an account?<Link to='/register' className='text-[#377E51] ml-2'>Register</Link></p>
                        <Link className='text-[#377E51] text-sm'>Forgot password</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login