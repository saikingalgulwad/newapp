'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import {HiSearch,HiBell,HiChat} from 'react-icons/hi';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Header() {
  const {data:session}=useSession();
  const router = useRouter();

useEffect(()=>{
  saveUserInfo();
},[session])

   const saveUserInfo = async()=>{
    if(session?.user){
      await fetch("https://full-stack-v3px.vercel.app/api/users",{
        method:"POST",
        body: JSON.stringify({ user : session.user }),
      })
     
    }
   }

   const onCreateClick = () =>{
    if(session){
     router.push('/pin-builder') 
    }else{
      signIn();
    }
   }


  return (
    <div className='flex gap-3 md:gap-2 items-center p-6 '>
      <Image src='/logo.png' alt='logo' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer ' onClick={()=>router.push('/')}/>
    <button className='bg-black text-white p-2 rounded-full px-4 ' onClick={()=>router.push('/')}>Home</button>
    <button className=' font-semibold p-2 rounded-full px-4 ' onClick={()=>onCreateClick()}>Create</button>
    <div className='bg-[#e9e9e9] p-3  gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px] text-gray-500' />
        <input type="text" placeholder='Search' className='bg-transparent outline-none' />
        
    </div>
    <HiSearch className='text-[50px] text-gray-500  md:hidden' />
    <HiBell className='text-[50px] text-gray-500 '/>
        <HiChat className='text-[50px] text-gray-500 ' />
      { session?.user?  <Image src={session?.user?.image} alt='logo' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer '
       onClick={()=>router.push('/'+session.user.email)}/>:
        <button className=' font-semibold p-2 rounded-full px-4 ' onClick={()=>signIn()}>Login</button>}
     </div>
   
  )
}

export default Header
