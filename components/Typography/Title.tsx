import styled from "styled-components"

interface props{
    text: string
}

const Small: React.FC<props> = (props) => (
    <div>
        <Text className="page-subtitle">
            {props.text}
        </Text>
    </div>
)

export default Small


const Text = styled.p`
    font-family: Mulish;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.02em;
    text-align: left;
`