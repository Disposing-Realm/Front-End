import NavBar from "../../components/top/navbar.jsx"
import Hometext from "../../components/hometext/hometext.jsx"
import logo from '../../logo.svg';
import "./home.css"
import Footer from "../../components/footer/end.jsx" 

export default function Home(/*{setAuth}*/) {
  // const { user } = useContext(AppContext)
  return (
    <>
      <NavBar /*key={user.user_id} userInfo={user} setAuth={setAuth}*/ />
      <div id="first-section">
        <img src={logo} className="App-logo" alt="logo" />
        <Hometext id="hometext" />
      </div>
      <div id="second-section">
        <img src={logo} className="App-logo" alt="logo" />
        <Hometext id="hometext" />
      </div>
      <div id="third-section">
        <img src={logo} className="App-logo" alt="logo" />
        <Hometext id="hometext" />
      </div>
      <Footer/>
      
      
      {/* <div className="homeContainer">

          <Sidebar />
          <Feed key={user.user_id} userInfo={user}/>
          <Rightbar/>
        </div> */}
    </>
  )
}