import React, {useState} from 'react';
import "./App.css"
import Nota from "./componentes/nota"
import Resultado from "./componentes/resultado"


const App = () => {
      const [notas, setNotas] = useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})

      const handleSetNotas = (e)=> {
         if(e.target.getAttribute('name') === 'nota1'){
          setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
         } else if(e.target.getAttribute('name') === 'nota2'){
          setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
         } else if(e.target.getAttribute('name') === 'nota3'){
          setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
         } else if(e.target.getAttribute('name') === 'nota4'){
          setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
         }
      }
return (
    <main class="App">
        <Nota nome={'nota1'} num={1} nota={notas.nota1} setNota={handleSetNotas} /><br />
        <Nota nome={'nota2'} num={2} nota={notas.nota2} setNota={handleSetNotas} /><br />
        <Nota nome={'nota3'} num={3} nota={notas.nota3} setNota={handleSetNotas} /><br />
        <Nota nome={'nota4'} num={4} nota={notas.nota4} setNota={handleSetNotas} /><br />

        <Resultado SomaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
     </main>)
}
 
export default App;