import NavBar from "../../components/top/navbar.jsx"
import Hometext from "../../components/hometext/hometext.jsx"

export default function Home(/*{setAuth}*/) {
    // const { user } = useContext(AppContext)
    return (
      <>
        <NavBar /*key={user.user_id} userInfo={user} setAuth={setAuth}*//>
        <Hometext id="hometext"/>
        {/* <div className="homeContainer">
          <Sidebar />
          <Feed key={user.user_id} userInfo={user}/>
          <Rightbar/>
        </div> */}
      </>
    )
  }