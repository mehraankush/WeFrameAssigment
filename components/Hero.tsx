
import ToDo from './ToDo'
import Heading from './Headings'

const Hero = () => {
  return (
    <div className="flex overflow-x-auto h-screen mt-8">
          <div className="flex-col  gap-2 ml-4 mr-4 ">
            <Heading title="To-Do List(24)"/>
            <ToDo/>
          </div>
          <div className="flex-col  gap-2 ml-4 mr-4 ">
             <Heading title="In-Progress(2)"/>
             <ToDo/>
          </div>
          <div className="flex-col  gap-2 ml-4 mr-4">
             <Heading title="Done(3)"/>
             <ToDo/>
          </div>
          <div className="flex-col  gap-2 ml-4 mr-4 ">
             <Heading title="Revised(0)"/>
              <div className=' bg-[#211A75] p-4 w-[300px] mt-5 rounded-lg'>
                <div className='p-3 bg-[#0D0B21] border-dashed border-2 border-sky-500 rounded'>
                  <p className=' text-center text-gray-400'>Move Card Here</p>
                </div>
              </div>
          </div>
          <div className="flex-col  gap-2 ml-4 mr-4">
             <Heading title="Done(3)"/>
             <ToDo/>
          </div>
    </div>
  )
}

export default Hero