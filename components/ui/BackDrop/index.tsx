
import styled from "styled-components"
import CheckboxSelectedComponent from "../CheckboxSelectedComponent"
import NewOrderCard from "../NewOrderCard"

const BackDrop = () =>{
    return (
        <div>
            <Container className="main backdropdown">
                <div className="backdropdown-line"></div>
                <p className="backdropdown-text">Select Order</p>
                <CheckboxSelectedComponent />
                {[1,2,3,4,5].map(() => 
                    <NewOrderCard />
                )}
            </Container>
        </div>
    )
}

export default BackDrop

const Container = styled.div`
    height: auto;
`