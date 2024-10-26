import RightBlock from "./RightBlock";

interface Props {
    num: number;
    row: number;
}

const RightBlocks: React.FC<Props> = ({ num, row }) => {

    return (
        <div>
            {
                Array.from({ length: row }, (_, index) => (
                    <RightBlock key={index} num={num} />
                ))
            }
        </div>
    );
}

export default RightBlocks;