export const initialState = {
  tema: "light",
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Tema": {
      let estado = "";

      if (state.tema == "light") {
        estado = "dark";
      } else {
        estado = "light";
      }
      console.log(estado);

      return { ...state, tema: estado };
    }

    case "Data":
      return { ...state, data: action.payload };

    case "Favorito":
      {
        // localStorage setItem 
        return state;
      }

    default:
      throw new Error("Accion no permitida");
  }
};
