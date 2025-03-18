import { useState } from "react";

function App() {
  const [info, setInfo] = useState(null);

  const mostrarDatos = () => {
    setInfo({
      nombre: "Luis Antonio Castillo Javier",
      carnet: "202003745",
      curso: "AYD1",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" , marginLeft:'800px'}}>
      <h1>Tarea 2</h1>
      <button onClick={mostrarDatos}>Mostrar Datos</button>
      {info && (
        <div >
          <p><strong>Nombre:</strong> {info.nombre}</p>
          <p><strong>Carnet:</strong> {info.carnet}</p>
          <p><strong>Curso:</strong> {info.curso}</p>
        </div>
      )}
    </div>
  );
}

export default App;
