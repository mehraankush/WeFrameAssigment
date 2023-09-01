import Image from 'next/image'
import {MoreVertical, UserPlus,MessageSquare} from 'lucide-react'

import Logo from './Svgs/Logo.svg'
import BtmBack from './Svgs/BtmBack.svg'
import Circule from './Svgs/Circule.svg'

interface HeadlineProps{
  NumberOfCompionents:number;
}

const HeadLine = ({NumberOfCompionents}:HeadlineProps) => {
  return (
    <div className='flex ml-5 mr-5 flex-col bg-[#15132B] shadow-xl p-3 mt-5'>

        <div className='flex justify-between flex-1 '>
               <div className='flex gap-2'>
                  {/* <Image src={BtmBack} alt='BAckBtn'/> */}
                  <BtmBack/>
                  <div className='flex-col mt-2'>
                      <h3 className='font-bold text-sm'>School November Tasks</h3>
                      <p className='font-normal text-xs text-muted-foreground'>Created by Instructor Day on November 31, 2022</p>
                  </div>
               </div>

                 <div className='flex gap-4'>
                   <div className='flex-col text-right'>
                       <p className='font-bold text-sm '>Centered Martial Arts</p>
                       <p className='font-normal text-xs '>Sunnyvale, Ca</p>
                   </div>
                   <div className='h-[50px] w-[50px]  bg-[#fff] rounded-lg'>
                     {/* <Image src={Logo} alt='Logo'/> */}
                     <Logo/>
                   </div>
                   <MoreVertical className='mt-2'/>
                 </div>
        </div>

        <div className='flex justify-around mt-3'>
            <div className='flex gap-4'>
              <div className=' flex relative'>
                      {Array.from({ length: NumberOfCompionents }, (_, index) => (
                    <Circule key={index} className='-ml-4 h-[40px] w-[40px]' />
                  ))}
              </div>
              <div className=' bg-[#6418C3] p-2 rounded-2xl flex gap-2'>
                  <UserPlus/>
                  <p className='capitalize'>Invite People</p>
              </div>
              <div className='rounded-2xl border p-2 pl-4 pr-4 text-white'>
                <p >Private</p>
              </div>
              <div className='rounded-2xl  bg-[#7879F1] p-2 pl-4 pr-4 text-white'>
                <p>Edit</p>
              </div>
              <div className='rounded-2xl flex gap-2 border p-2  text-white'>
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