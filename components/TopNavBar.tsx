import { Search ,ChevronDown} from "lucide-react"
import Image from "next/image"

import Bell from './Svgs/Bell.svg'
import CheckBox from './Svgs/CheckBox.svg'
import Lession from './Svgs/Lession.svg'
import Office from './Svgs/Office.svg'
import UK from './Svgs//UK.svg'
import Square from './Svgs/Square.svg'

const TopNavBar = () => {
  return (
    <div className='bg-[#15132B] flex justify-between p-1'>
         <div className="flex mt-2 h-[50px] w-[300px] bg-[#211A75] rounded-3xl">
            <Search className="mt-3 ml-4"/> <input className="bg-transparent outline-none  p-2"  type="text" placeholder='Search here'/>
         </div>
         <div className="mt-3">
              <a className="text-sm text-blue-700 font-bold underline">OTHER MENUS</a>
         </div>

         <div className="flex gap-4 mt-3">
            <div>
                <Bell/>
                <p className="bg-[#5ECFFF] h-[15px] w-[15px] text-center  absolute ml-3 top-3 rounded-2xl text-xs">12</p>
            </div>
            <div>
            <p className="bg-[#5ECFFF]  h-[15px] w-[15px] text-center absolute ml-3 top-3 rounded-2xl text-xs">5</p>
                <Lession/>
            </div>
            <div>
            <p className="bg-[#5ECFFF]  h-[15px] w-[15px] text-center absolute ml-3 top-3 rounded-2xl text-xs">2</p>
              <CheckBox/>
            </div>  
            <div>
            <p className="bg-[#5ECFFF]    h-[15px] w-[15px] text-center absolute ml-3 top-3 rounded-2xl text-xs">!</p>
                <Office/>
            </div>
         </div>
         
         <div className="flex bg-[#211A75] rounded-3xl p-3 gap-2 h-fit mt-1">
                <UK className="h-[20px] w-[20px]"/>
                <p className="text-sm">ENGLISH</p>
                <ChevronDown/>
            </div>
           

          <div className="flex gap-3 h-fit mt-1">
            <Square className="h-[35px] w-[35px]"/>
            <div className="flex-col">
               <h3 className="font-bold text-sm text-white">Instructor Day</h3>
               <p className="text-blue-600 text-xs">Super Admin</p>
            </div>
            <ChevronDown/>
          </div>
    </div>
  )
}

export default TopNavBar
