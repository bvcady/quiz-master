import { useEffect, useState } from "react";
import { Team } from "../../types/types";

export const useAllTeamData = () => {
  const [teams, setTeams] = useState<Team[]>();

  const URL = "https://kerst-quiz-db.vercel.app/api/teams/";

  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const json = await res.json();

      setTeams(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalletje = setInterval(() => {
      fetchData();
    }, 60000);

    fetchData();

    return () => clearInterval(intervalletje);
  }, []);

  return { teams, fetchData };
};
