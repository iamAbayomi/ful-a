import styled from "styled-components"

interface props{
    text: string
}

const Small: React.FC<props> = (props) => (
    <div>
        <Text className="">
            {props.text}
        </Text>
    </div>
)

export default Small


const Text = styled.p`
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    margin: 22px 0px 0px;
    padding: 20px 0px 0px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #092443;
`