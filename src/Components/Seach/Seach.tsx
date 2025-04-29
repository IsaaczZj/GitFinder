import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./Seach.module.css";

type SeachProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Seach = ({ loadUser }: SeachProps) => {
  const [userName, setUserName] = useState("");
  const [empty, setEmpty] = useState(false);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (userName.trim() === "") {
        setEmpty(true);
        return;
      }
      loadUser(userName)
      setEmpty(false)
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
    if (e.target.value.trim() !== "") setEmpty(false);
  } 


  return (
    <div className={styles.seach}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.input_wrapper}>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Nome do usuário"
          value={userName}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={17} />
        </button>
      </div>
      {empty && (
        <p className={styles.error}>O campo precisa estar preenchido</p>
      )}
    </div>
  );
};

export default Seach;
