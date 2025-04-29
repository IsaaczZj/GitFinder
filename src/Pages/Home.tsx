import React, { useState } from "react";
import Seach from "../Components/Seach/Seach";
import { UserProps } from "../Types/user";
import User from "../Components/User/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
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
  };

  return (
    <div>
      <Seach loadUser={loadUser} />
      {user && <User {...user}/>}
      

    </div>
  );
};

export default Home;
