import { Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function Dashboard()
{
    return  <>
                <Header></Header>
                <hr></hr>
                <Link to={"home"}>Home</Link> | 
                <Link to={"about"}>About Us</Link> | 
                <Link to={"contact"}>Contact Us</Link> | 
                <hr></hr>
                <Routes>
                    <Route exact path="/" 
                            component={Home}></Route>
                      <Route exact path="home" 
                            component={Home}></Route>
                    <Route exact path="about" 
                            component={About}></Route>
                    <Route exact path="contact" 
                            component={Contact}></Route>
                  
                </Routes>
                <hr></hr>
                <Footer></Footer>
            </>
}

export default Dashboard;