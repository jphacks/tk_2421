import NameBlocks from "./NameBlocks";
import LeftBlocks from "./LeftBlocks";
import RightBlocks from "./RightBlocks";

function Tournament() {
  return (
    <div>
      <div style={{ height: "50px" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <NameBlocks />
          <LeftBlocks num={1} row={32} />
          <LeftBlocks num={2} row={16} />
          <LeftBlocks num={3} row={8} />
          <LeftBlocks num={4} row={4} />
          <LeftBlocks num={5} row={2} />
          <LeftBlocks num={6} row={1} />
          <div>
            <div>
              <div className="top-back bottom-back right-back left-back" style={{ width: "60px", height: "892px" }}></div>
              <div className="top-basic bottom-back right-back left-back" style={{ width: "60px", height: "892px" }}></div>
            </div>
          </div>
          <RightBlocks num={6} row={1} />
          <RightBlocks num={5} row={2} />
          <RightBlocks num={4} row={4} />
          <RightBlocks num={3} row={8} />
          <RightBlocks num={2} row={16} />
          <RightBlocks num={1} row={32} />
          <NameBlocks />
        </div>
      </div>
    </div>
  );
}

export default Tournament;