import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-[#00DDA2] text-white py-2 px-8 mt-3 self-center ${className}`}>{text}</button>
  )
}

export default Button