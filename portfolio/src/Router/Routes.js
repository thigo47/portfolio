import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Sobre from "../components/Sobre";
import App from "../App";


function AppRoutes(params) {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>} ></Route>
            <Route path = "/Sobre" element = {<Sobre/>}>
            </Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default AppRoutes