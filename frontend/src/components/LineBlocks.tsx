import LeftBlocks from "./LeftBlocks";
import RightBlocks from "./RightBlocks";
import CenterBlock from "./CenterBlock";

interface Props {
    num: number;
}

const LineBlocks: React.FC<Props> = ({ num }) => {
    return (
        <div style={{ display: "flex" }}>
            {
                Array.from({ length: (num - 1) }, (_, index) => (
                    <LeftBlocks key={index} num={index + 1} row={Math.pow(2, num - (index + 2))} />
                ))
            }
            <CenterBlock num={num} />
            {
                Array.from({ length: (num - 1) }, (_, index) => (
                    <RightBlocks key={index} num={num - (index + 1)} row={Math.pow(2, index)} />
                ))
            }
        </div>
    );
}

export default LineBlocks;