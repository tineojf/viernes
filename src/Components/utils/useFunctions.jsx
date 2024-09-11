import { useContext } from "react";
import { ContextGlobal } from "./global.context";

// "getter" del providerContext
export const useContextGlobal = () => useContext(ContextGlobal);
