import { useContext } from "react"
import UserContext from "../../contexts/UserContext"

export default function Home() {
    const {userData} = useContext(UserContext);
    console.log(userData); 
    return <div>Deu bom!</div>
}