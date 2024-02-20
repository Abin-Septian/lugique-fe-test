import Image from "next/image";
import InputSearch from "@/components/InputSearch";
import SearchButton from "@/components/SearchButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
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
    <main className="bg flex flex-col p-[26px_30px] h-full">
      <div className="flex-grow flex items-center justify-center">
        <Image src="/assets/logo.png" alt="" width={72.2} height={83.8} />
      </div>
      <div className="w-full flex-0 space-y-[15px]">
        <InputSearch
          value={inputValue}
          onChange={(e: any) => handleInputChange(e.target.value)}
        />
        <SearchButton onClick={handleSearchButtonClick}>Search</SearchButton>
      </div>
    </main>
  );
}

