import React from "react";
import Button from "./Button";


const Main = (props) => {
  return (
    <>
    <form onSubmit={props.formulario} class ="main">
        <div className="form-group">
        <label>Nombre: </label>
        <input type="text" className="form-control" placeholder="Ingresa Nombre" onChange={(e) => props.name(e.target.value)} value={props.dataName}/>
        </div>
        <div className="form-group">
        <label>Contraseña: </label>
        <input type="password" className="form-control" placeholder="Ingresa Contraseña" onChange={(e) => props.password(e.target.value)} value={props.dataPassword}/>
        </div>
        <div>
        <div class = "alert">  {props.dataPassword === "252525" ? <Button /> : null}
        {props.error ? <p class = "error">Debes ingresar tu nombre</p> : null}</div>
       </div>
    </form>
      </>
  );
};

export default Main;