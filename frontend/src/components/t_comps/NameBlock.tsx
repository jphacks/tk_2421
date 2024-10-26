interface Props {
    name: string
}

const NameBlock: React.FC<Props> = ({ name }) => {
    return (
        <div className="top-back bottom-back right-back left-back" style={{ height: "24" }}>{name}</div>
    );
};

export default NameBlock;