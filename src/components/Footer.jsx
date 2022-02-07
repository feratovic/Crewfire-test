import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
    return(
        <footer className="bg-[#0264DB] p-4 text-[#EBEBEB]">
            <p className="flex gap-4 justify-center	">
                created with  
                <AiFillHeart fontSize={26} className="text-[#FF0084]" />   
                by 
                <a href="https://www.elmazferatovic.me/en"
                    className="font-bold"
                >Elmaz Feratovic</a>
            </p>
        </footer>
    )
}