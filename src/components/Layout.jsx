import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <div className="bg-[#EBEBEB]">
      <Navbar />
      <div className="w-full md:w-[85%] m-auto min-h-[85vh]">
        {children}
      </div>
      <Footer />
    </div>
    )
}
