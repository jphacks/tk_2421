import styled from 'styled-components';
import '../assets/style/style.css';

interface Props {
    num: number;
}

const LeftFirstBlock = styled.div<Props>`
    width: 30px;
    height: ${(props) => `${3 + 7 * (Math.pow(2, props.num) - 1)}px` };
`;

const LeftBlock: React.FC<Props> = ({ num }) => {
    return (
        <div>
            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
            <LeftFirstBlock className="top-basic bottom-back right-basic left-back" num={num} />
            <LeftFirstBlock className="top-back bottom-basic right-basic left-back" num={num} />
            <LeftFirstBlock className="top-back bottom-back right-back left-back" num={num} />
        </div>
    );
}

export default LeftBlock;