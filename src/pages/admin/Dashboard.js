import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar';


const Dashboard = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [sidebarStrech, setSidebarDown] = useState(false);
  return (
    <div style={{display:'flex'}}>
    <SideBar  expanded={sidebarExpanded}
        onClickBurgerMenu={setSidebarExpanded}
        stretch={sidebarStrech}
        onClickupDown={setSidebarDown}/>
    <Outlet />
    </div>
  )
}

export default Dashboard;