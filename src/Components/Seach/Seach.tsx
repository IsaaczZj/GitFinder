import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import styles from "./Seach.module.css";

type SeachProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Seach = ({ loadUser }: SeachProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div className={styles.seach}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.input_wrapper}>
        <input
          onChange={({ target }) => setUserName(target.value)}
          type="text"
          placeholder="Nome do usuário"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch size={17} />
        </button>
      </div>
    </div>
  );
};

export default Seach;
