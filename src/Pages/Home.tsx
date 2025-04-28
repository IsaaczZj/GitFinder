import React, { useState } from "react";
import Seach from "../Components/Seach";
import { UserProps } from "../Types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    console.log(data);
    
  };

  return (
    <div>
      <Seach loadUser={loadUser}/>
    </div>
  );
};

export default Home;
