import { useEffect, useState } from "react";
import LineBlocks from "./t_comps/LineBlocks";
import RightNameBlocks from "./t_comps/RightNameBlocks";
import LeftNameBlocks from "./t_comps/LeftNameBlocks";

function Tournament() {

  const [tournament, setTournament] = useState([]);

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/tournament');
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTournament(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchTournament();
  }, []);

  const calcLength = (num: number) => {
    if(Number.isInteger(Math.log2(num)))
      return Math.log2(num);
    else{
      return Math.floor(Math.log2(num)) + 1;
    }
  }

  return (
    <div>
      <div style={{ height: "50px" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <LeftNameBlocks num={Math.floor(tournament.length / 2)} tournament={JSON.stringify(tournament)} />
          {/* <LineBlocks num={Math.log2(tournament.length)} seedCount={5} /> */}
          <LineBlocks num={calcLength(tournament.length)} tournament={JSON.stringify(tournament)} />
          <RightNameBlocks num={Math.floor(tournament.length / 2)} tournament={JSON.stringify(tournament)} />
        </div>
      </div>
    </div>
  );
}

export default Tournament;