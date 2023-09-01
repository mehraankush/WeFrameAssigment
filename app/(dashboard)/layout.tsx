import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import TopNavBar from "@/components/TopNavBar";


const DashboardLayout = async({children}:{children:React.ReactNode})=>{
    
     return (
      <div className="h-full relative">
          <div className="hidden h-full md:flex md:flex-col 
              md:fixed  md:w-72 md:inset-y-0 bg-gray-900">
             <SideBar/>
          </div>
          <main className="md:pl-72 bg-[#0D0B21]">
             <TopNavBar/>
             {/* <Navbar/> */}
             {children}
          </main>
      </div>
     )
}

export default DashboardLayout;