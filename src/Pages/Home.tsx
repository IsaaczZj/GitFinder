import React, { useState } from "react";
import Seach from "../Components/Seach/Seach";
import { UserProps } from "../Types/user";
import User from "../Components/User/User";
import Error from "../Components/Error/Error";
import Loader from "../Components/Loader/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();

      const { avatar_url, login, location, followers, following } = data;
      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };
      setUser(userData);
    } catch (error) {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Seach loadUser={loadUser} />
      {loading && <Loader/>}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
