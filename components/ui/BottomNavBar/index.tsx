import Link from "next/link"
import router, { useRouter } from "next/router"
import styled from "styled-components"
import Bag from "../../icons/Bag"
import Bicycle from "../../icons/Bicycle"
import Dashboard from "../../icons/Dashboard"
import Package from "../../icons/Package"

const BottomNavBar = () => {
    const router = useRouter()
    return(
        <BottomNavBarDiv className='bottom-navbar'>
            <li className={router.pathname == "/neworders" ? "active" : "" }>
                <Link href={'/neworders'}><a><Bag /></a></Link>
            </li>
            <li className={router.pathname == "/batched" ? "active" : "" }>
                <Link href={'/batched'}><a><Package /></a></Link>
            </li>
            <li className={router.pathname == "/sentout" ? "active" : "" }>
                <Link href={'/sentout'}><a><Bicycle /></a></Link>
            </li>
            <li className={router.pathname == "/dashboard" ? "active" : "" }>
                <Link href={'/dashboard'}><a><Dashboard /></a></Link>
            </li>
        </BottomNavBarDiv>
    )
}

export default BottomNavBar



const BottomNavBarDiv = styled.div`
    
`