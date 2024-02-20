import ResultCard from "@/components/ResultCard";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const ResultPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const { q } = router.query;
    if (q && typeof q === "string") {
      setQuery(q);
    }
  }, [router.query]);

  const getKey = (pageIndex: any, previousPageData: any) => {
    if (!query) return null;
    if (previousPageData && !previousPageData.results.length) return null;
    return `https://itunes.apple.com/search?term=${query}&entity=song&limit=4&offset=${
      pageIndex * 4
    }`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  return (
    <div className="h-full w-full relative overflow-auto bg-[#f8fafc] border-0">
      <Navbar />
      <div className="text-center text-sm py-8">
        Search result for : <span className="tetx-lg text-burple capitalize font-bold">{decodeURIComponent(query)}</span>
      </div>
      <div className="p-[15px] space-y-[20px] w-full">
        {data &&
          data.map((pageData, index: number) => (
            <React.Fragment key={index}>
              {pageData.results.map((track: any) => (
                <ResultCard
                  key={track.trackId}
                  artist={track.artistName || ""}
                  song={track.trackName || ""}
                  price={track.trackPrice || ""}
                  image={track.artworkUrl100 || ""}
                  genre={track.primaryGenreName || ""}
                />
              ))}
            </React.Fragment>
          ))}
        <div className="w-full flex justify-center">
          {data && data[0]?.results?.length > 0 ? (
            <button
              className="bg-[#e2e8f0] p-[10px_29px] text-xs font-medium text-blueGray-500 m-auto rounded-[17px]"
              onClick={() => setSize(size + 1)}
            >
              Load More
            </button>
          ) : (
            "Data not found"
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
