import RightBlock from "./RightBlock";

interface Props {
    num: number;
    row: number;
    tournament: string;
}

const RightBlocks: React.FC<Props> = ({ num, row, tournament }) => {

    return (
        <div>
            {
                Array.from({ length: row }, (_, index) => (
                    <RightBlock key={index} num={num} row={row} index={index} tournament={tournament} />
                ))
            }
        </div>
    );
}

export default RightBlocks;