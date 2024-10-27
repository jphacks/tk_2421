import LineBlocks from "./t_comps/LineBlocks";
import RightNameBlocks from "./t_comps/RightNameBlocks";
import LeftNameBlocks from "./t_comps/LeftNameBlocks";

interface Props {
  tournament: string;
}

const Tournament: React.FC<Props> = ({ tournament }) => {

  const calcLength = (num: number) => {
    if (Number.isInteger(Math.log2(num))) return Math.log2(num);
    else {
      return Math.floor(Math.log2(num)) + 1;
    }
  };

  return (
    <div>
      <div style={{ height: "50px" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <LeftNameBlocks
            num={Math.floor(JSON.parse(tournament).length / 2)}
            tournament={tournament}
          />
          <LineBlocks
            num={calcLength(JSON.parse(tournament))}
            tournament={tournament}
          />
          <RightNameBlocks
            num={Math.floor(JSON.parse(tournament).length / 2)}
            tournament={tournament}
          />
        </div>
      </div>
    </div>
  );
};

export default Tournament;
