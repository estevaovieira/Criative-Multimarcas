import Botao from '../Components/Botao'
import style from '../styles/Home.module.css'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {

  const [carros, setCarros] = useState(
    JSON.parse(localStorage.getItem('carro')) || []
  );

  // Filtrar Carros
  const [busca, setBusca] = useState('');

  useEffect(() => {
    localStorage.setItem("carro", JSON.stringify(carros));
  }, [carros]);

  // Excluir Carro
  const handleDelete = (index) => {
    const novaListaDeCarros = [...carros];
    novaListaDeCarros.splice(index, 1);
    setCarros(novaListaDeCarros);
    localStorage.setItem('carro', JSON.stringify(novaListaDeCarros))
  };

  return (
      <div className={style.menu}>
        <Link to='https://criative-multimarcas.vercel.app/novoCarro'><Botao texto="Novo Carro" /></Link>

        <input 
          type="text" 
          placeholder='Filtrar Carros' 
          value={busca} 
          onChange={(event) => setBusca(event.target.value)}
        />        

      {carros == '' ? <h1 className={style.listaVazia}>Adicione um carro!</h1> : (<table className={style.listaDeCarros}>
        <thead>
          <tr className={style.hTabela}>
            <td>Marca</td>
            <td>Modelo</td>
            <td>Cor</td>
            <td>Ano</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
        {carros.filter((carro) => {
          if(busca == '') {
            return carro
          }else if (carro.marca.toLowerCase().includes(busca.toLowerCase())) {
            return carro
          }else if (carro.modelo.toLowerCase().includes(busca.toLowerCase())) {
            return carro
          }else if (carro.cor.toLowerCase().includes(busca.toLowerCase())) {
            return carro
          }else if (carro.ano.toLowerCase().includes(busca.toLowerCase())) {
            return carro
          }
        }).map((carro, index) => (
          <tr className={style.bTabela} key={index}>
            <td>{carro.marca}</td>
            <td>{carro.modelo}</td>
            <td>{carro.cor}</td>
            <td>{carro.ano}</td>
            <td><Link to={`https://criative-multimarcas.vercel.app/carros/${index}`} ><button>Editar</button></Link><button onClick={() => handleDelete(index)}>Deletar</button></td>
          </tr>
        ))
        }
        </tbody>
      </table>)}
      </div>
  )

}

export default Home