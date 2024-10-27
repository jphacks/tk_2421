import NameBlock from "./NameBlock";

interface Props {
    num: number;
    tournament: string;
}

const RightNameBlocks: React.FC<Props> = ({ num, tournament }) => {
    return (
        <div>            
            {
                Array.from({ length: num }, (_, index) => (
                    <NameBlock key={index} name={JSON.parse(tournament)[index + num]["name"]} />
                ))
            }
        </div>
    );
}

export default RightNameBlocks;