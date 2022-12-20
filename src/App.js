import React, {useState} from "react";
import Main from "./components/Main";
import Footer from "./components/Footer"

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const validarForm = (e) => { 
    e.preventDefault();
    if (name === "") {
       setError(true);
    return;
    }
  setError(false);
  setName("");
  setPassword("");
  };

  return (
    <>
    <h1>Desafío 2 React <i class="fab fa-react"></i> </h1>
    <Main  formulario={validarForm} error={error} 
    dataName={name} name={setName} dataPassword={password} password={setPassword}/>
    <Footer/>
    </>
  );
}

export default App;