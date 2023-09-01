"use client"

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'


import { Code, Menu ,Mail, MessageCircle, UserCircle, CalendarDays, FileVideo, ShoppingCart, Mic2, Settings, LayoutDashboard } from "lucide-react";
import  BottomCard from './BottomCard'

const montserrat = Montserrat({weight:'600',subsets:['latin']}) 

const routes = [
  {
  lable:"Dashboard",
  icon:LayoutDashboard,
  href:"/dashboard",
  color:"text-woodland"
  },
  {
  lable:"Email",
  icon:Mail,
  href:"/email",
  color:"text-woodland"
  },
  {
  lable:"Chat",
  icon:MessageCircle,
  href:"/chat",
  color:"text-faded-blue"
  },
  {
  lable:"Kanban",
  icon:Code,
  href:"/image",
  color:"text-kanban"
  },
  {
  lable:"Contact",
  icon:UserCircle,
  href:"/contact",
  color:"text-faded-blue"
  },
  {
  lable:"Calendar",
  icon:CalendarDays,
  href:"/calendar",
  color:"text-faded-blue"
  },
  {
  lable:"Courses",
  icon:FileVideo,
  href:"/courses",
  color:"text-faded-blue"
  },
  {
  lable:"Shop",
  icon:ShoppingCart,
  href:"/settings",
  color:"text-faded-blue"
  },
  {
  lable:"Invoices",
  icon:Mic2,
  href:"/settings",
  color:"text-faded-blue"
  },
  {
  lable:"Settings",
  icon:Settings,
  href:"/settings",
  color:"text-faded-blue"
  }
];


interface SideBarProps{
 getCount:number;
}

const SideBar = () => {


  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white shadow-lg bg-[#15132B]"> 
       <div className="px-3 py-2 flex-1">
          <div className="flex justify-around">
              <h1 className={`text-xl capitalize text-white`}>weframetech</h1>
              <Menu className="flex-end cursor-pointer" />
          </div>
          <h2 className="text-gray-400 p-3 text-sm font-sm tracking-wider">MAIN MENU</h2>
          <div>
             {
              routes.map((item)=>(
                <Link
                  href={item.href}
                  key={item.href}
                  className={`text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ${pathname === item.href?'text-white bg-white/10':'text-zinc-400'} `}
                >
                 <div className="flex items-center flex-1">
                      <item.icon className={`h-5 w-5 mr-5 ${item.color}`}/>
                     {item.lable}
                 </div>
                </Link>

              ))
             }
          </div>
       </div>
       <div className="w-full flex justify-around">
         <BottomCard/>
       </div>
    </div>
  )
}
 
export default SideBar;