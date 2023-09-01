
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
             <Heading title="Revised(3)"/>
             <ToDo/>
          </div>
    </div>
  )
}

export default Hero