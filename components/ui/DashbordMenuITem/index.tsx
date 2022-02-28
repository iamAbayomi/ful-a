//import pro

import styled from "styled-components"

type props = {
    menuItemImage: any,
    menuItemTitle: any
}
const DashboardMenuItem = ({menuItemImage, menuItemTitle} : props ) => {
    return(
        <Container className="dashboard-menu-item display-flex">
            <img src={menuItemImage} />
            <MenuItemTitle>{menuItemTitle}</MenuItemTitle>
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