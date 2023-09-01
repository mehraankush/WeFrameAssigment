"use client"
import { Menu } from 'lucide-react'
import SideBar from './SideBar'
import { useState } from 'react';


const MobileSidebar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div>
      <button onClick={()=>settoggle(!toggle)} className='md:hidden'>
            <Menu/>
      </button>
      {
        toggle?(<div className='p-0 z-[0]'> <SideBar/> </div>):''
      }
    </div>
  )
}

export default MobileSidebar