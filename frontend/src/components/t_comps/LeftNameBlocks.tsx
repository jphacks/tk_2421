import NameBlock from "./NameBlock";

interface Props {
    num: number;
    tournament: string;
}

const LeftNameBlocks: React.FC<Props> = ({ num, tournament }) => {
    return (
        <div>            
            {
                Array.from({ length: num }, (_, index) => (
                    <NameBlock key={index} name={JSON.parse(tournament)[index]["name"]} />
                ))
            }
        </div>
    );
}

export default LeftNameBlocks;