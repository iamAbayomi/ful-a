//import pro

import Link from "next/link"
import styled from "styled-components"

type props = {
    menuItemImage: any,
    menuItemTitle: any,
    menuUrl?: string
}
const DashboardMenuItem = ({menuItemImage, menuItemTitle, menuUrl ="/dashboard"} : props ) => {
    return(
        <Container className="dashboard-menu-item display-flex">
            <img src={menuItemImage} />
            <Link href={menuUrl}>
                <MenuItemTitle>{menuItemTitle}</MenuItemTitle>
            </Link>
        </Container>
    )
}

export default DashboardMenuItem


const Container = styled.div`
    max-width: max-content;
    margin: 10px 0px;
`

const MenuItemTitle = styled.p`
    font-weight: 600;
    font-size: 21.1095px;
    color: #8F92A1;
    margin-left: 34px;
`