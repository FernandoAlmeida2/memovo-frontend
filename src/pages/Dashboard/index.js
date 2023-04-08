import { Outlet } from "react-router-dom"
import styled from "styled-components"

export default function Dashboard() {
    return (
        <DashboardStyle>
            <Outlet />
        </DashboardStyle>
    )
}

const DashboardStyle = styled.div`
    display: flex;
`