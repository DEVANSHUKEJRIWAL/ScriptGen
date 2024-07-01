"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Home, FileClock, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function SideNav() {
  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
  ]

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[])
  
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src={'./logo.svg'} alt='logo' width={120} height={120} />
      </div>
      <hr className='my-6 border'/>
      <div className='mt-10'>
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path && 'bg-primary text-white'}`}>
            <menu.icon className='h-6 w-6'/>
            <h2 className='text-lg'>{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
