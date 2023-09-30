import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Monsters from "./components/Monsters/Monsters";
import MainNav from "./components/MainNav/MainNav";
import Encounter from "./components/Encounter/Encounter";
import Players from "./components/Players/Players";

export default () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showMonsters, setShowMonsters] = useState(false);
  const [showPlayers, setShowPlayers] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);

  const showMonstersHandler = () => {
    setShowLoading(false);
    setShowMonsters(true);
    setShowPlayers(false);
    setShowEncounter(false);
  };

  const showPlayersHandler = () => {
    setShowLoading(false);
    setShowMonsters(false);
    setShowPlayers(true);
    setShowEncounter(false);
  };

  const showEncounterHandler = () => {
    setShowLoading(false);
    setShowMonsters(false);
    setShowPlayers(false);
    setShowEncounter(true);
  };

  return (
    <div className="container">
      {showLoading && <Loading></Loading>}
      {!showLoading && (
        <MainNav
          showEncounter={showEncounterHandler}
          showPlayers={showPlayersHandler}
          showMonsters={showMonstersHandler}
        />
      )}
      {!showLoading && showMonsters && <Monsters></Monsters>}
      {!showLoading && showPlayers && <Players></Players>}
      {!showLoading && showEncounter && <Encounter></Encounter>}
    </div>
  );
};
