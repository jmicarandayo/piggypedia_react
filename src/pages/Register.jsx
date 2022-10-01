import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-[450px] p-4'>
            <h1 className='text-[#377E51] text-4xl font-bold text-center my-8'>Create your account</h1>
            <div>
                <span className='text-gray-400 font-light text-sm'>Create account using</span>
                <div className='flex justify-between my-4 items-center'>
                    <button className='border-[#377E51] border py-3 px-12 sm:px-14 hover:bg-[#377E51] hover:text-white'>Google</button>
                    <button className='border-[#377E51] border py-3 px-12 sm:px-14 hover:bg-[#377E51] hover:text-white'>Facebook</button>
                </div>
                <form className='flex flex-col gap-6'>
                    <input className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="text" placeholder='Your email address'/>
                    <input className='bg-[#ECECEC] outline-none p-3 shadow-md place' type="password" placeholder='Your password'/>
                    <button className='bg-[#00DDA2] text-white p-3 text-light'>Sign Up</button>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-400 '>Already have an account?<Link className='text-[#377E51] ml-2'>Login</Link></p>
                        <Link className='text-[#377E51] text-sm'>Forgot password</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register