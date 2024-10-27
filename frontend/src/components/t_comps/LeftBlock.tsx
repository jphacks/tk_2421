import styled from 'styled-components';
import '../../assets/style/style.css';

interface LeftFirstBlockProps {
    num: number;
}

interface Props {
    num: number;
    index: number;
    tournament: string;
}

const LeftFirstBlock = styled.div<LeftFirstBlockProps>`
    width: 30px;
    height: ${(props) => `${3 + 7 * (Math.pow(2, props.num) - 1)}px` };
`;

const LeftBlock: React.FC<Props> = ({ num, index, tournament }) => {
    return (
        <div>
            {
                num === 1 && !JSON.parse(tournament)[index]["isSeed"]?
                    (index % 2 === 0 ? 
                        <div>
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <LeftFirstBlock className="top-basic bottom-back right-back left-back" num={num} />
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                        </div>
                    :
                        <div>
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <LeftFirstBlock className="top-back bottom-basic right-back left-back" num={num} />
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                        </div>
                    )
                :
                <div>
                    <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                    <LeftFirstBlock className="top-basic bottom-back right-basic left-back" num={num} />
                    <LeftFirstBlock className="top-back bottom-basic right-basic left-back" num={num} />
                    <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
                </div>
            }
        </div>
        
    );
}

export default LeftBlock;