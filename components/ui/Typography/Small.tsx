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
    font-size: 10px;
    margin: 20px 0px 5px;
    color: #8F92A1;

`