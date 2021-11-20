import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { login, signup } from '../features/userSlice';
import Login from './Login';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const logIn = (e) => {
        alert("Please Sign Up as You are not registered")
    }

    const handleSignup = (e) => {
        e.preventDefault();

        
        dispatch(
            signup({
                name:name,
                email:email,
                password:password,
                signedUp:true,
            })
            

        );
    };

    return (
        <div>
            <form className="signup__form" onSubmit={(e) => handleSignup(e)}>
            <h1>Signup Here</h1> 
            <input type="name" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} required/> <br/><br/>

            <input type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required/> <br/><br/>

            <input type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required/>  <br/><br/>  

{/* <label class="container">Two
  <input type="radio" name="radio"/>
  <span class="checkmark"></span>
</label>
<label class="container">Three
  <input type="radio" name="radio"/>
  <span class="checkmark"></span>
</label>
<label class="container">Four
  <input type="radio" name="radio"/>
  <span class="checkmark"></span>
</label>
<br/> */}
            <button type="submit" className="btn btn-success">
                Submit
            </button>

            

          </form>
          <br/>         

          <button type="submit" className="btn btn-danger" onClick={(e) => logIn(e)}>
                Login
            </button>
        </div>
    )
}

export default Signup
