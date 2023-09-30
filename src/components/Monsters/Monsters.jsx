import { useEffect } from "react";

export default () => {
  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetch("https://api.open5e.com/monsters/", {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        method: "GET",
      });

      console.log(response);

      if (!response.ok) {
        console.log("failed to get data ");
        return;
      }

      const data = await response.json();
      console.log(data);
    };
    getMonsters();
  }, []);

  return <div>Showing Monsters Page</div>;
};
