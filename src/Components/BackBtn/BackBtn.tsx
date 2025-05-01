import React from 'react'
import { useNavigate } from 'react-router'
import styles from "./BackBtn.module.css"
const BackBtn = () => {
  const navigate = useNavigate()
  return (
    <button className={styles.button} onClick={() => navigate(-1)}>Voltar</button>
  )
}

export default BackBtn