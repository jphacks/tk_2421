import NameBlocks from "./NameBlocks";
import { useEffect, useState } from "react";
import LineBlocks from "./LineBlocks";

function Tournament() {

  const [tournament, setTournament] = useState([]);

  useEffect(() => {
    const fetchTournament = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tournament');
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setTournament(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchTournament();
  }, []);

  useEffect(() => {
    console.log(Math.log2(tournament.length));
  }, [tournament]);

  return (
    <div>
      <div style={{ height: "50px" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <NameBlocks />
          <LineBlocks num={Math.log2(tournament.length)}/>
          <NameBlocks />
        </div>
      </div>
    </div>
  );
}

export default Tournament;