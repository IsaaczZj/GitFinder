import React from 'react'
import { useNavigate } from 'react-router'

const BackBtn = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)}>Voltar</button>
  )
}

export default BackBtn