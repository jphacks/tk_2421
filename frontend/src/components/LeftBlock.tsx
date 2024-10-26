import styled from 'styled-components';

const LeftFirstBlock = styled.div`
    width: 30px
    height: ${(props) => 3 + 7 * (Math.pow(2, props.num) - 1) }px
`;

function LeftBlock (props) {
    return (
        <div>
            <LeftFirstBlock num={props.num} />
        </div>
    );
}

export default LeftBlock;