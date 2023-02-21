import style from '../styles/CampoTexto.module.css'

const CampoTexto = (props) => {

  const aoDigitar = (event) => {
    props.Altera(event.target.value)
  }

  return (
    <div className={style.campoTexto}>
      <label>{props.titulo}</label>
      <input type={props.tipo} placeholder={props.placeholder} onChange={aoDigitar} />
    </div>
  )
}

export default CampoTexto