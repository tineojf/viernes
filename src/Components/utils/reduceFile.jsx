export const initialState = {
  tema: "light",
  data: [],
  favs: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Tema":
      return {};

    case "Data":
      return {};

    case "Favorito":
      return {};

    default:
      throw new Error("Accion no permitida");
  }
};
