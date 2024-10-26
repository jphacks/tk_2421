import LeftBlock from "./LeftBlock";

interface Props {
    num: number;
    row: number;
}

const LeftBlocks: React.FC<Props> = ({ num, row }) => {

    return (
        <div>
            {
                Array.from({ length: row }, (_, index) => (
                    <LeftBlock key={index} num={num} />
                ))
            }
        </div>
    );
}

export default LeftBlocks;