"use client";
import { useSearch } from "../context/search.context";
export default function PopUp(props){
    const{searchResults, getSearchText}= useSearch();
    return(
         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative bg-white w-[350px] p-6 rounded-lg shadow-xl">
        <button
        
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-xl"
            onClick={props.close}
        >
          X
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">
          Search
        </h2>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            onChange={getSearchText}
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 rounded-md pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="h-20 overflow-y-scroll p-2">{searchResults.map((result, index)=>(<p key={index}>{result.name}</p>))}</div>
        <a href="/search"><button className="mt-4 w-full bg-pink-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium">
          Search
        </button>
</a>
      </div>
    </div>
        
    )
}