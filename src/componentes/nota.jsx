import React from 'react';

const nota = ( props ) => {
  return ( 
    <>
       <label>Digite uma nota:{props.num} </label>
       <input type="text" name={props.nome} value={props.nota} onChange={(e)=> props.setNota(e)} />
    </>
   );
}
 
export default nota;