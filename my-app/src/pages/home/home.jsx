import NavBar from "../../components/top/navbar.jsx"
import Hometext from "../../components/hometext/hometext.jsx"
import Footer from "../../components/footer/end.jsx" 


export default function Home(/*{setAuth}*/) {
    // const { user } = useContext(AppContext)
    return (
      <>
        <NavBar /*key={user.user_id} userInfo={user} setAuth={setAuth}*//>
        <Hometext id="hometext"/>
        <Footer/>
        {/* <div className="homeContainer">
          <Sidebar />
          <Feed key={user.user_id} userInfo={user}/>
          <Rightbar/>
        </div> */}
      </>
    )
  }