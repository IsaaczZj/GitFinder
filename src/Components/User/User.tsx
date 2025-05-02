import React from "react";
import { UserProps } from "../../Types/user";
import { MdLocationPin } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import styles from "./User.module.css";

const User = ({
  avatar_url,
  login,
  followers,
  location,
  following,
}: UserProps) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/repositorios/${login}`, { state: { avatar_url } });
  }
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt="imagem do usuario" />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <button className={styles.buttom} onClick={handleNavigate}>
        Ver melhores projetos
      </button>
    </div>
  );
};

export default User;
