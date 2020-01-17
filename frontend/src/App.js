import React, { useState } from 'react';
import './App.css';
import api from './services/api';
import logo from './assets/logo.png'

function App() {
  const [placa, setPlaca] = useState('')
  async function handleSubmit(event){
    event.preventDefault()
    const response = await api.get(`/plate?placa=${placa}`)
    const str = response.data
    if(typeof str==="string"){
      alert(str)
    }else{
          const { modelo } = response.data
          const {situacao} = response.data
          const { ano } = response.data
          const {cor} = response.data
          const {municipio} = response.data 
          const {uf} = response.data
          const {anoModelo} = response.data
          const total = [`Situação: ${situacao}`,`Modelo: ${modelo}`,`Ano: ${ano}`,`Ano modelo: ${anoModelo}`,`Cor: ${cor}`,`Municipio: ${municipio}`, `Estado: ${uf}` ]
          const totalArray = total.join("\n")
          alert(totalArray)}

    
   
    
  }

  return (
  <div className="container">
    <img src={logo} alt="sinespWEB">

    </img>
    <div className="content">
    <form onSubmit={handleSubmit}>
      <label htmlFor="placa">PLACA *</label>
      <input 
      id="placa"
      type="placa"
      placeholder="Utilize o formato 'LLLNLNN', 'LLLNNLN' ou 'LLLNNNN' (em que L é letra e N, número)."
      value = {placa}
      onChange={event => setPlaca(event.target.value)}/>

     
    <button type="submit" className="btn">Pesquisar</button>
    </form>
    </div>
  </div>
    
  );
}

export default App;
