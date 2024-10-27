import styled from 'styled-components';
import '../../assets/style/style.css';


interface RightFirstBlockProps {
    num: number;
}

interface Props {
    num: number;
    row: number;
    index: number;
    tournament: string;
}

const RightFirstBlock = styled.div<RightFirstBlockProps>`
    width: 30px;
    height: ${(props) => `${3 + 7 * (Math.pow(2, props.num) - 1)}px` };
`;

const RightBlock: React.FC<Props> = ({ num, row, index, tournament }) => {
    return (
<div>
            {
                num === 1 && !JSON.parse(tournament)[index + row]["isSeed"]?
                    (index % 2 === 0 ?
                        <div>
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <RightFirstBlock className="top-basic bottom-back right-back left-back" num={num} />
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                        </div>
                    :
                        <div>
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <RightFirstBlock className="top-back bottom-basic right-back left-back" num={num} />
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                        </div>
                    )
                :
                <div>
                    <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                    <RightFirstBlock className="top-basic bottom-back right-back left-basic" num={num} />
                    <RightFirstBlock className="top-back bottom-basic right-back left-basic" num={num} />
                    <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                </div>
            }
        </div>
    );
}

export default RightBlock;