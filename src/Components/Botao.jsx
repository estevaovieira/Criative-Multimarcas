import style from '../styles/Botao.module.css'

const Botao = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className={style.botao}>
      {texto}
    </button>
  )
}

export default Botao