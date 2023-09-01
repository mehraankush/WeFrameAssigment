import { Dot, MoreHorizontal, Clock5 ,Circle} from 'lucide-react'
import Circule from './Svgs/Circule.svg'

interface CardProps{
    title:String;
    Style:String;
    NumberOfCompionents:number;
}

const Card = ({title ,Style,NumberOfCompionents =1}:CardProps) => {
  return (
    <div className='flex flex-col w-[300px] bg-[#211A75] p-3 gap-2 space-y-2 rounded-2xl mt-4 '>
        <div className=' flex justify-between'>
            <div className='flex' >
                <Dot/>{title}
            </div>
            <MoreHorizontal/>
        </div>
        <div>
            <p className='text-white'>Create sign up sheet for holiday student/parent conferences.</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={`${Style} h-2.5 rounded-full`}></div>
        </div>
        <div className='flex justify-between'>
          <div className='flex ml-3'>
          {Array.from({ length: NumberOfCompionents }, (_, index) => (
                    <Circule key={index} className='-ml-3 h-[20px] w-[20px]'/>
            ))}
          </div>
          <div className='flex gap-2 '>
            <Clock5/>
            <p className='text-sm font-light'>Due in 4 Days</p>
          </div>
        </div>

    </div>
  )
}

export default Card