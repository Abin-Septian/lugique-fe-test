import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Menu, Search, X } from "lucide-react";
import InputSearch from "./InputSearch";
import SearchButton from "./SearchButton";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [inputValue, setInputValue] = useState(""); 
  const router = useRouter();

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearchButtonClick = () => {
    const encodedValue = encodeURIComponent(inputValue);
    router.push(`/result?q=${encodedValue}`);
    setInputValue("");
  };

  return (
    <>
      <Dialog>
        <div className="sticky w-full top-0 left-0 bar h-10 z-50 flex items-center justify-between pt-2 p-[15px]">
          <Menu size={16} color="white"></Menu>
          <div><Image src="/assets/ngmusic.png" alt="" width={72.2} height={15.8} /></div>
          <DialogTrigger>
            <Search size={16} color="white" />
          </DialogTrigger>
          <DialogContent className="h-screen bg-transparent w-full flex border-0 items-center justify-center flex-col gap-3">
            <DialogTrigger>
              <X className="absolute right-4 top-4" color="white" size={16}></X>
            </DialogTrigger>
            <div className="text-white font-bold text-xl pb-4">Search</div>
            <InputSearch
              value={inputValue}
              onChange={(e: any) => handleInputChange(e.target.value)}
            />
            <DialogTrigger className="w-full">
              <SearchButton
                className="bg font-semibold"
                onClick={handleSearchButtonClick}
              >
                Search
              </SearchButton>
            </DialogTrigger>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
