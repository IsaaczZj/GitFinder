import React, { useEffect, useState } from "react";
import styles from "./Repositorios.module.css";
import { useLocation, useParams } from "react-router";
import BackBtn from "../../Components/BackBtn/BackBtn";
import { RepositorioProps } from "../../Types/Repositorios";
import Loader from "../../Components/Loader/Loader";
import Repositorio from "../../Components/Repositorio/Repositorio";

const Repositorios = () => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [repositorios, setRepositorios] = useState<
    RepositorioProps[] | [] | null
  >(null);
  const location = useLocation();
  const avatarState = location.state?.avatar_url;
  const [avatarUrl, setAvatarUrl] = useState<string | null>(avatarState || null);

  useEffect(() => {
    async function loadRepos(userName: string) {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos?sort=created&direction=desc`
      );
      const data = await response.json();
      const lastFiveRepos = data.slice(0, 10);

      setRepositorios(lastFiveRepos);
      setLoading(false);
    }
    if (username) loadRepos(username);
  }, [username]);

  if (!repositorios && loading) return <Loader />;
  return (
    <div className={styles.repositorios}>
      <BackBtn />
      <div>
        <h2>Explore os repositorios do usuario: {username}</h2>
        {avatarUrl && <img className={styles.avatar} src={avatarUrl}/>}
      </div>
      {repositorios && repositorios.length === 0 && <p>Não há repositorios</p>}

      <div className={styles.respositorios_container}>
        {repositorios?.map((repositorio) => (
          <Repositorio key={repositorio.name} {...repositorio} />
        ))}
      </div>
    </div>
  );
};

export default Repositorios;
