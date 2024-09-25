import { createContext, useState, Dispatch, SetStateAction } from "react";

// Define the context interface
export interface Context {
    usage: number;
    setUsage: Dispatch<SetStateAction<number>>;
}


export const UsageContext = createContext<any>(0);


