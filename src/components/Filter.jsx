import { useContext } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { HiViewList } from "react-icons/hi";

import { PublicContext } from "../context/PublicContext";

export default function Filter() {
    const { grid, setGrid } = useContext(PublicContext);

    return (
        <div className="mx-4 my-6 text-center sm:text-right ">
           <button name="Grid view" type="submit" className="mr-4 hover:scale-125" onClick={e => setGrid(prev => (!prev))}>
               <CgMenuGridR fontSize={30} className={!grid && ' text-[#C0C0C0]'}/>
           </button>
           <button name="List view" type="submit" className="hover:scale-125" onClick={e => setGrid(prev => (!prev))}>
               <HiViewList fontSize={30} className={grid && ' text-[#C0C0C0]'}/>
           </button>
        </div>
    )
}