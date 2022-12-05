import NavBar from "../../components/top/navbar.jsx"
import Hometext from "../../components/hometext/hometext.jsx"
import logo from '../../logo.svg';
import table1 from "../../images/LitteringNyc.png"
import img2 from "../../images/cityTrash.jpg"
import img3 from "../../images/parkTrash.jpg"
import "./home.css"
import Footer from "../../components/footer/end.jsx" 

export default function Home(/*{setAuth}*/) {
  // const { user } = useContext(AppContext)
  return (
    <>
      <NavBar /*key={user.user_id} userInfo={user} setAuth={setAuth}*/ />
      <div id="first-section">
        <img src={table1} className="home-img" alt="" />
        <Hometext id="hometext" />
        <p>According to the NYC DOS there was more trash collected in September of 2022 than in September of 2021. Since there is more trash being collected that means more trash was produced.</p>
      </div>
      <div id="second-section">
        <img src={img2} className="home-img" alt="" />
        <Hometext id="hometext" />
        <p>Using 311 data, complaints from New Yorkers have more than doubled when it comes to litter in the parks. This data is from 2021 and it states that Brooklyn had the most complaints with over 1,899 followed by the Bronx with over 1,524. </p>
      </div>
      <div id="third-section">
        <img src={img3} className="home-img" alt="" />
        <Hometext id="hometext" />
        <p>According to the New York Times, despite the efforts of Bill de Blasio, New York City gernerates more trash than it did over 5 years ago. </p>
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