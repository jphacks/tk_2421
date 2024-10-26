import LeftBlock from "./LeftBlock";

interface Props {
    num: number;
    row: number;
    tournament: string;
}

const LeftBlocks: React.FC<Props> = ({ num, row, tournament }) => {

    return (
        <div>
            {
                Array.from({ length: row }, (_, index) => (
                    <LeftBlock key={index} num={num} index={index} tournament={tournament} />
                ))
            }
        </div>
    );
}

export default LeftBlocks;