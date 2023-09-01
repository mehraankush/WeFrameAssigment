"use client"
import {MoreVertical, UserPlus,MessageSquare} from 'lucide-react'

import Logo from './Svgs/Logo.svg'
import BtmBack from './Svgs/BtmBack.svg'
import Circule from './Svgs/Circule.svg'
import { useState } from 'react'

interface HeadlineProps{
  NumberOfCompionents:number;
}

const HeadLine = ({NumberOfCompionents}:HeadlineProps) => {
  const [verticalMenu, setVerticalMenu] = useState(false);

  return (
    <div className='flex ml-5 mr-5 flex-col bg-[#15132B] h-[200px] md:h-[150px] shadow-xl p-4 rounded mt-5'>

        <div className='flex justify-between flex-1 '>
               <div className='flex gap-2'>
                  {/* <Image src={BtmBack} alt='BAckBtn'/> */}
                  <BtmBack className="h-[30px] w-[30px]"/>
                  <div className='flex-col mt-2'>
                      <h3 className='font-bold text-xs md:text-sm'>School November Tasks</h3>
                      <p className='font-normal text-xs text-muted-foreground'>Created by Instructor Day on November 31, 2022</p>
                  </div>
               </div>

                 <div className='flex gap-1 md:gap-4'>
                   <div className='flex-col text-right'>
                       <p className='font-bold  text-xs md:text-sm '>Centered Martial Arts</p>
                       <p className='font-normal text-xs '>Sunnyvale, Ca</p>
                   </div>
                   <div className=' h-[35px] w-[35px] md:h-[50px] md:w-[50px]  bg-[#fff] rounded-lg'>
                     <Logo className=" h-[35px] w-[35px] md:h-[50px] md:w-[50px]" />
                   </div>
                   <MoreVertical className='mt-2'/>
                 </div>
        </div>

        <div className='flex justify-around mt-3'>
          {
            verticalMenu && (
              <>
            <div className='flex absolute left-0 flex-col gap-2 text-center p-3 bg-[#0D0B21] lg:hidden'>
              <div className='text-lg'>
                  <button onClick={()=>setVerticalMenu(false)}>X</button>
                </div>
                   <div className='flex gap-2 bg-[#211A75] p-2 rounded cursor-pointer'>
                      <UserPlus/>
                        <p className='text-lg font-semibold'>Invite People</p>
                    </div>
                     <div className='bg-[#211A75] p-2 rounded cursor-pointer'>
                        <p className='text-lg font-semibold'>Private</p>
                     </div>
                   <div className='bg-[#211A75] p-2 rounded cursor-pointer'>
                     <p className='text-lg font-semibold'>Edit</p>
                   </div>
            </div>
              </>
            )
          }
           

            <div className='flex justify-between gap-4'>
              <MoreVertical className='flex mt-2 mr-6 lg:hidden cursor-pointer' onClick={()=>setVerticalMenu(true)}/>
              <div className=' flex'>
                      {Array.from({ length: NumberOfCompionents }, (_, index) => (
                    <Circule key={index} className='-ml-4 h-[40px] w-[40px]' />
                  ))}
              </div>
              <div className=' bg-[#6418C3] p-2 rounded-2xl  gap-2 hidden lg:flex'>
                  <UserPlus/>
                  <p className='capitalize'>Invite People</p>
              </div>
              <div className='rounded-2xl border p-2 pl-4 pr-4 text-white hidden lg:flex'>
                <p >Private</p>
              </div>
              <div className='rounded-2xl  bg-[#7879F1] p-2 pl-4 pr-4 text-white hidden lg:flex'>
                <p>Edit</p>
              </div>
              <div className='rounded-2xl hidden lg:flex gap-2 border p-2  text-white'>
                 <MessageSquare/>
                 <p>25 Comments</p>
              </div>
            </div>

            <div>
              <div>
                <p>Total Progress 60%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                   <div className="bg-blue-600 h-2.5 rounded-full w-7/12"></div>
               </div>
            </div>
        </div>

    </div>
  )
}

export default HeadLine