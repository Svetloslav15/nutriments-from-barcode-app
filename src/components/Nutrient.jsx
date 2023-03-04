import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: black;
    width: 40%;
    min-width: 70px;
    border-bottom: 2px solid white;
    padding: 5px;
`;
const Label = styled.span`
    color: white;
`;
const Value = styled.span`
    color: white;
    font-weight: bold;
`;

const Nutrient = ({label, value, unit}) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Value>{value} {unit}</Value>
        </Wrapper>
    )
}

export default Nutrient;