import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assignment from "./components/Assignment";
import ListGroup from "./components/ListGroup"
import Management from "./components/Management"
import Navbar from "./components/Navbar";
import StudentDetail from "./components/StudentDetail";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./components/Admin";

function App(){

    return(

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ListGroup/>}/>
                <Route path="/management" element={<Management/>}/>
                <Route path="/students/:id" element={<StudentDetail/>}/>

                <Route path="/admin" element={<PrivateRoute/>}>
                    <Route index element={<Admin/>}/>
                </Route>

                <Route path="/notfound" element={<NotFound/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>


    )
};

export default App