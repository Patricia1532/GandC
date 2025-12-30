"use client";

import { CartProvider } from "./cart-context";
import { SearchProvider } from "./search.context";

export function Providers({children}){
    return(
        <SearchProvider><CartProvider>{children}</CartProvider></SearchProvider>
    )
}