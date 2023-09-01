"use client"
import Image from 'next/image'
import  DotSquare  from './Svgs/DotSquare.svg'
import  SemiSquare  from './Svgs/SemiSquare.svg'
import {MoveRight} from "lucide-react"

const BottomCard = () => {
  return (
    <div className=' flex  flex-col rounded-3xl h-[150px] w-[150px] md:h-[180px] md:w-[200px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'>
      <div className='mt-5 ml-4'>
        <DotSquare className='h-[29px] w-[22]'/>
      </div>
       <div className=' md:w-[170px] mb-2 md:mb-0 ml-4 mt-4 text-white'>
         <p className=' text-sm md:text-xl font-medium md:font-semibold '>Increase your work with kanban</p>
       </div>
       <div >
          <MoveRight className='ml-5'/>
          <SemiSquare/>
       </div>
    </div>
  )
}

export default BottomCard