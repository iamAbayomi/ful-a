import { useRouter } from "next/router"
import styled from "styled-components"
import OrderItemsComponent from "../../components/ui/OrderItemsComponent"

const index = () => {
    const router = useRouter()

    function proceedToNextOrder(){
        router.push('/test')
    }

    return (
        <Container className="main backdropdown">
            <div className="backdropdown-line"></div>
            <p className="backdropdown-text">Verify Package</p>
            <p className="body-text">Input items in the package to confirm order items</p>
            <input className="input-text" type="name" placeholder="Type item here" />
            <OrderItemsComponent />
            <div className='center-div'>
                <button onClick={proceedToNextOrder} className="red-button">Verify</button>
            </div>
            
        </Container>
    )
}

export default index


const Container = styled.div`
    background-color: white ;
    border: 1px solid rgb(0 0 0 / 12%);
    height: 100vh;
`