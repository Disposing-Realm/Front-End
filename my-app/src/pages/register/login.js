import { useRef, useState, useEffect, useContext } from "react";
import AppContext from "../../context/appContext"
//import axios from '../../api/axios'

const Login_Url = '/auth'

const Login = () => {
    const {setAuth} = useContext(AppContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e)=> {
    e.prevent.Default()
    // try {
    //     const response = await axios.post(Login_Url, JSON.stringify({user, pwd}),
    //     {
    //         headers: { 'Content-Type': 'application/json'},
    //         withCredentials: true
    //     })
    //     setUser('')
    //     setPwd('')
    //     setSuccess(true)
    // } catch(err){

    // }
   
    
  }

  return (
    <>
    {success ? (<section>
        <h1> You are logged in!</h1>
        <br/>
        <p>
            <a herf = '#'>Go to Home</a>
        </p>
    </section>
    ) : (
    <section>
      <p
        ref={errRef}
        classname={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1> Sign In </h1>
      <form onSubmit = {handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account? <br/>
        <span classname = 'line'>
            { /*router*/}
            <a href= "#" >Sign Up</a>
        </span>
      </p>
    </section>
    )};
    </>
  );
};
export default Login;
