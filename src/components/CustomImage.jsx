import { useState } from 'react';
import { BsImages } from "react-icons/bs";

import {imagePlaceholder} from '../utils/config';

export default function CustomImage({link, grid}) {
  const [loaded, setLoaded] = useState(false);

  //Check if image is fully loaded
  const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  })  
;

//If image is laoded remove loading background
loadImage( link && link[link.length - 1]
  && link[link.length - 1]._attributes.href).
  then(image => setLoaded(true));

  return (
    loaded ?
    <img
      src={
        link && link[link.length - 1]
          ? link[link.length - 1]._attributes.href
          : imagePlaceholder
      }
      alt="flickr user photo"
      className={`w-full  duration-1000 
                        group-hover:scale-125 object-cover object-center	
                        ${grid ? ' h-[30vh] md:h-[40vh] ' : ' h-[50vh]'}
                        `}
    />
    : 
    
    <div className={`flex justify-center items-center	 w-full duration-1000  bg-black animate-pulse 
        ${grid ? ' h-[30vh] md:h-[40vh] ' : ' h-[50vh]'}
    `}>
      <BsImages  fontSize={100} className="text-white"/>
    </div>
  );
}
