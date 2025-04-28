import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SeachProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Seach = ({ loadUser }: SeachProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por um usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          onChange={({ target }) => setUserName(target.value)}
          type="text"
          placeholder="Digite o nome do usuário"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Seach;
