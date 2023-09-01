import Link from "next/link"


const page = () => {
  return (
    <div className='h-screen bg-white w-screen'>
        <div className='text-white flex justify-center items-center border h-screen p-2'>
            <Link href='/dashboard'>
                <button className='p-3 rounded bg-black shadow hover:text-black hover:bg-white  transition-all hover:border'>Go to Dashboard</button>
            </Link>
        </div>
    </div>
  )
}

export default page