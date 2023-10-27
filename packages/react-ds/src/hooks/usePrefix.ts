import { createContext, useContext } from "react";
import { environment } from "../environment";

export const PrefixContext = createContext(environment.prefix)

export function usePrefix() {
  return useContext(PrefixContext);
}