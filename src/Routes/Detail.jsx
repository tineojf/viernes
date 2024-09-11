import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const [datos, setDatos] = useState({});

  useEffect(() => {
    const llamadoAPI = async () => {
      const res = await axios(url);
      const data = await res.data;
      // console.log(data);
      setDatos(data);
    };

    llamadoAPI();
  }, [url]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card name={datos.name} username={datos.username} id={datos.id} />
    </>
  );
};

export default Detail;
