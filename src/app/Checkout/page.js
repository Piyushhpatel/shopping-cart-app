import Link from "next/link";
import React from "react"

const Checkout = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="transition-all duration-200 bg-white md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto  mt-20 flex flex-col gap-2 shadow-md" 
    >
      <img src={'/checked.png'} className="w-[200px] select-none aspect-square mx-auto mb-10"/>
      <h1 className="text-slate-900 text-2xl font-bold text-center mx-10">Thank You For Shopping With Us</h1>
      <Link
       href={'/'}
       className='bg-green-500 max-w-[200px] mx-auto mt-6 font-medium text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-200 select-none'>Shop More</Link>
    </div>
    </div>
  )
};

export default Checkout;
