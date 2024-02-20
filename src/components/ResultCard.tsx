import React, { useState } from "react";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { CircleDollarSign } from "lucide-react";

type TResultCard = {
  artist: string;
  song: string;
  image: string;
  price: string;
  genre: string;
};

const ResultCard = ({ artist, song, image, genre, price }: TResultCard) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Card className="px-[10px] py-[12px] rounded-lg w-full shadow-lg h-max flex gap-3 border-0">
      <div className="w-[100px] h-[100px] flex-0">
        {!imageLoaded && (
          <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg" />
        )}
        <AspectRatio ratio={1 / 1}>
          <Image
            objectFit="cover"
            src={image}
            alt=""
            fill
            className="rounded-lg"
            onLoadingComplete={handleImageLoad}
          ></Image>
        </AspectRatio>
      </div>
      <div className="flex flex-col justify-between w-[60%]">
        <div>
          <div className="text-[10px] font-medium text-blue-950">{artist}</div>
          <div className="text-sm font-bold text-blue-950">{song}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-0 h-6 min-w-[45px] p-[5px_13px_4px] bg-[#10b981] rounded-[12px] text-[10px] capitalize text-white font-medium">
            {genre}
          </div>
          <div className="flex gap-1 items-center">
            <CircleDollarSign color="#f5b014" size={20}></CircleDollarSign>
            <div className="text-sm font-bold text-[#f5b014]">{price}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
