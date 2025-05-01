import React from "react";
import styles from "./Repositorio.module.css";
import { RepositorioProps } from "../../Types/Repositorios";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
const Repositorio = ({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count,
}: RepositorioProps) => {
  return (
    <div className={styles.repositorio}>
      <h2>{name}</h2>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div className={styles.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          {forks_count}
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repositorio_btn}>
        <span>Ver código</span>
        <span >
          <RiGitRepositoryLine />
        </span>
      </a>
    </div>
  );
};

export default Repositorio;
