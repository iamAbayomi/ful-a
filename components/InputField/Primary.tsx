import styled from "styled-components"

type props = {
    placeholder: string,
    type: string
}


const Primary: React.FC<props> = (props) => (
    <div>
        <InputField className="" type={props.type} placeholder={props.placeholder} />
    </div>
)


export default Primary

const InputField = styled.input`
    display: block;
    margin: 20px 0px 10px;
`