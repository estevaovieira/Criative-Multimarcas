import Botao from '../Components/Botao';
import CampoTexto from '../Components/CampoTexto';

import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const AddCarro = () => {
  const navigate = useNavigate();

  const { id } = useParams()
  
  const data = JSON.parse(localStorage.getItem('carro')) || "[]";
  
  const currentCarro = data[id]
  
  const defaultCar = { marca: null, modelo: null, cor: null, ano: null }
  
  const [carro, setCarro] = useState( currentCarro || defaultCar );

  const aoEnviar = () => {

    let isValidated = true
    let keys = Object.keys(carro)

    keys.forEach(key => {
      if(carro[key] == null || carro[key] == "") {
        alert(`${key} não pode estar vazio`) 
        isValidated = false
        return
      }
    })

    if(!isValidated) return

    if(currentCarro) {

      data[id] = carro

    } else {

      data.push(carro)

    }

    localStorage.setItem('carro', JSON.stringify(data))

    navigate('https://criative-multimarcas.vercel.app/')
  };

  return (
    <section>
      <CampoTexto
        titulo='Marca'
        placeholder='Digite a marca'
        tipo='text'
        value={carro.marca}
        Altera={value => setCarro({ ...carro, marca: value })}
      />

      <CampoTexto
        titulo='Modelo'
        placeholder='Digite o modelo'
        tipo='text'
        value={carro.modelo}
        Altera={value => setCarro({ ...carro, modelo: value })}
      />

      <CampoTexto
        titulo='Cor'
        placeholder='Digite a cor'
        tipo='text'
        value={carro.cor}
        Altera={value => setCarro({ ...carro, cor: value })}
      />

      <CampoTexto
        titulo='Ano'
        placeholder='Digite o ano'
        tipo='number'
        value={carro.ano}
        Altera={value => setCarro({ ...carro, ano: value })}
      />

      <Botao onClick={aoEnviar} texto='Adicionar Carro' />
    </section>
  )
};

export default AddCarro