import { Plus } from 'lucide-react'

interface HeadProp {
    title:String;
}

const Headings = ({title}:HeadProp) => {
  return (
    <div className='flex justify-between'>
      <h3 className='font-bold text-lg'>{title}</h3>
      <div className='bg-[#6418C3] p-2 rounded-lg'><Plus/></div>
    </div>
  )
}

export default Headings