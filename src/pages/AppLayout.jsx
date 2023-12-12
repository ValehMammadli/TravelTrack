import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";
import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import User from "../components/User"
import styles from './AppLayout.module.css'

function AppLayout() {
  const {isAuthenticated} = useAuth();
const navigate = useNavigate();

useEffect(function(){
    if (!isAuthenticated) 
        navigate("/")
    
},[isAuthenticated,navigate])
  return (
    <div className={styles.app}>
       <Sidebar/>
       <Map/>
     {isAuthenticated && <User/>}  
        </div>
  )
}

export default AppLayout