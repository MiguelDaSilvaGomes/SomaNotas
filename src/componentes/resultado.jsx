import React from 'react';
import "../App.css"

const resultado = ( props ) => {
    return ( 
        <div>
            <p>Soma das Notas: {props.SomaNotas}</p>
            <p class="paragrafo">{props.SomaNotas  >= 60 ? "aprovado" : "reprovado"}</p>
        </div>
     );
}
export default resultado;