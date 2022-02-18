import styled from "styled-components"

interface props{
    text: string
}

const Medium: React.FC<props> = (props) => (
    <div>
        <Text className="page-subtitle">
            {props.text}
        </Text>
    </div>
)

export default Medium


const Text = styled.p`
    font-size: 12px;
    font-weight: 600;
    margin: -5px 0px 0px;
`