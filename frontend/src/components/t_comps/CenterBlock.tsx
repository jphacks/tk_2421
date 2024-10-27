import styled from "styled-components";

interface Props {
  num: number;
}

const Center = styled.div<Props>`
  width: 30px;
  height: ${(props) => `${3 + 7 * (Math.pow(2, props.num) - 1)}px`};
`;

const CenterBlock: React.FC<Props> = ({ num }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Center
          className="top-back bottom-back right-basic left-back"
          num={num}
        />
        <Center
          className="top-back bottom-back right-back left-back"
          num={num}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Center
          className="top-basic bottom-back right-back left-back"
          num={num}
        />
        <Center
          className="top-basic bottom-back right-back left-back"
          num={num}
        />
      </div>
    </div>
  );
};

export default CenterBlock;
