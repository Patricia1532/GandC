"use client"



export default function Frontpage(){
    return(
        <div className= "flex h-screen w-full overflow-hidden">
            <div className="relative flex-1 bg-cover bg-center cursor-pointer transition-transform duration-700 hover:scale-105" style={{backgroundImage: "url('/femme.png')"}} > 
             <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
             <h1 className="text-4x1 md: text-6x1 font-bold tracking-wide leading-tight">INDULGE<br/>YOUR SENSES
             </h1>
             <a href="/feminine">
            <p className="mt-4 text-lg md: text-xl tracking-widest hover:underline">
                FOR HER
            </p>
            </a>
             </div>
            </div>
        <div className="relative flex-1 bg-cover bg-center cursor-pointer transition-transform duration-700 hover:scale-105" style={{backgroundImage: "url('/malee.png')"}}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
         <h1 className="text-4x1 md: text-6x1 font-bold tracking-wide leading-tight">
            INDULGE<br/>YOUR SENSES
         </h1>
         <a href="/masculine">
         <p className="mt-4 text-lg md:text-x1 tracking-widest hover:underline">
         FOR HIM
         </p>
         </a>
        </div>
        </div>
        </div>
    )
}