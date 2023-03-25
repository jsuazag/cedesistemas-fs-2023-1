import React, { useState } from 'react';
import { Button } from "./Button"

export const App = () => {

  // estructuras datos
  //const pets = ['bruno', 'lucas', 'simba'];

  // hooks (useState)
  const [pets, setPets] = useState(['bruno', 'lucas', 'simba']);
  const [inputPet, setInputPet] = useState("");

  // eventos
  const onChangeInputPet = (event) => {
    setInputPet(event.target.value);
  }

  // funciones
  const onAddPet = () => {
    setPets([...pets, inputPet]);
    setInputPet("");
  }

  return (
    <React.Fragment>
      <h1>hola react :)</h1>
      <Button name="Enviar" />
      <br /><br />
      <Button name="Descargar" />
      <br /><br />
      <input value={inputPet} onChange={onChangeInputPet} type="text" placeholder="Ingresar mascota" />
      <Button name="Agregar" onPress={onAddPet} />
      <ul>
        {
          pets.map(item => <li>{item}</li>)
        }
      </ul>
    </React.Fragment>
  )
}