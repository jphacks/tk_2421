import styled from 'styled-components';
import '../assets/style/style.css';

interface Props {
    num: number;
}

const RightFirstBlock = styled.div<Props>`
    width: 30px;
    height: ${(props) => `${3 + 7 * (Math.pow(2, props.num) - 1)}px` };
`;

const RightBlock: React.FC<Props> = ({ num }) => {
    return (
        <div>
            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
            <RightFirstBlock className="top-basic bottom-back right-back left-basic" num={num} />
            <RightFirstBlock className="top-back bottom-basic right-back left-basic" num={num} />
            <RightFirstBlock className="top-back bottom-back right-back left-back" num={num} />
        </div>
    );
}

export default RightBlock;