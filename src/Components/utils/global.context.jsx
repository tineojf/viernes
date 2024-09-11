import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reduceFile";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = (propiedades) => {
  const { children } = propiedades;
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // variables que guardare en el contexto
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Añadir las variables (array: tema, data, favs)
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
