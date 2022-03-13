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
            <table style={{width: "100%"}}>
                <tr>
                    <td><img src={menuItemImage} /></td>
                    <td>
                        <Link href={menuUrl}>
                            <MenuItemTitle>{menuItemTitle}</MenuItemTitle>
                        </Link>
                    </td>
                </tr>
            </table>
        </Container>
    )
}

export default DashboardMenuItem


const Container = styled.div`
    max-width: max-content;
    margin: 41px 0px;
`

const MenuItemTitle = styled.p`
    font-weight: 600;
    width: 100%
    font-size: 21.1095px;
    color: #8F92A1;
    margin: 0px 30px 0px;
`