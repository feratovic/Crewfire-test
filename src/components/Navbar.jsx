import { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { PublicContext } from "../context/PublicContext";
import { flickrLogo } from "../utils/config";

export const SearchInput = ({value, handleChange, searchData }) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter')  searchData(); 
    }

     return (
        <div className="flex items-center" >
            <input 
                type="search"
                className="p-[6px] w-[93%] rounded-l-3xl px-4"
                value={value}
                onChange={e => handleChange(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SearchBtn 
                className="bg-[#0A68DA] rounded-r-full p-[5px] w-[80px] hover:opacity-75" 
                searchData={searchData}
            />
        </div>
    );
}

export const SearchBtn = ({className, searchData}) => (
    <button 
        className={className}
        onClick={searchData}
        type="submit"
        name="Search"
    >
        <BiSearchAlt 
            fontSize={26} 
            className="text-white m-auto"
        />
    </button>
)

export default function Navbar() {
    const { search, setSearch, searchData, openSearch, setOpenSearch } = useContext(PublicContext);

    return (
        <nav className="sticky top-0 bg-[#C0C0C0] p-4 z-10">
            <div className="w-full md:w-[85%] flex flex-row justify-between items-center m-auto">
                <a href="https://www.flickr.com/">
                    <img src={flickrLogo} alt="Flickr logo" width={100} height={100}/>
                </a>
                <div className="w-full my-4 sm:w-3/5 sm:my-0  hidden md:block">
                    <SearchInput 
                        value={search} 
                        handleChange={setSearch} 
                        searchData={searchData}
                    />
                </div>
                <a  className="rounded-3xl border-2 border-[#FE0385] text-white bg-[#FE0385] px-6 py-[3px] font-semibold text-xl  
                                 hover:bg-transparent hover:text-[#FE0385] duration-500 hidden md:block"
                    href="https://www.elmazferatovic.me/en"
                >
                    Portfolio
                </a>
                <div className="block md:hidden flex gap-4">
                    <BiSearchAlt fontSize={30} className="text-[#0A68DA] cursor-pointer" onClick={e => setOpenSearch(prev => (!prev))}/>
                    <a href="https://www.elmazferatovic.me/en">
                        <CgProfile fontSize={30} className="text-[#FE0385]"/>
                    </a>
                </div>
                {openSearch && 
                    <div className="absolute top-3 left-[1%] w-[98%] block md:hidden">
                        <SearchInput 
                            value={search} 
                            handleChange={setSearch} 
                            searchData={searchData}
                         />
                    </div>
                }
            </div>
        </nav>
    );
  }
  