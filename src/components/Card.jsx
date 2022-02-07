import React, {  useContext } from "react";

import { PublicContext } from "../context/PublicContext";
import { formatDate } from "../utils/stringManupulations";

import   CustomImage   from './CustomImage';

export default function Card({link, author, updated}) {
    const { grid } = useContext(PublicContext);

    return (
        <div className={`relative group overflow-hidden ${!grid && ' mb-4 '}`}> 
            <CustomImage  grid={grid} link={link}/> 
            <a className="absolute top-0 left-0 w-full h-full
                            cursor-pointer duration-1000
                            group-hover:bg-gradient-to-b from-[#00000000] to-[#000000E6]
                            hidden group-hover:block"
                href={author && author.uri ? author.uri._text : 'https://www.flickr.com/'}
            >
                <div className="absolute bottom-4 left-4">
                    <h1 className="text-[#EBEBEB] font-semibold text-3xl">{author && author.name ? author.name._text : '-'}</h1>
                    <p className="text-[#C0C0C0] font-medium"> {formatDate(updated._text)}</p>
                </div>
            </a>
        </div>
    )}