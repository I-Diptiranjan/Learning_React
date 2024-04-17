import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState(0);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/i-diptiranjan")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/i-diptiranjan");
  return res;
};
