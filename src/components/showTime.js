import React from 'react'

const MostraTempo = (props) => {
  const tempo = props.tempo
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return (
    <p className='tempo'>
        Seu tempo médio por volta é de:
      <span>{`${minutosStr}:${segundosStr}`}</span><br />
      
    </p>
  )
}

export default MostraTempo