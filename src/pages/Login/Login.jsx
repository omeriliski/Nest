import "./Login.scss"
import { Input, FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useState, useRef, useEffect} from "react";
import useClickOutside from "../../lib/ClickOutsideHook.jsx" // Custom Hook


export default function Login(){

    const { login, setLogin } = useContext(loginContext)

    //Custom Hook for outside click Event...............
    let domNode = useClickOutside(() => {
        setLogin(false)
    })
   
//    useEffect(() => {

//     const body = document.querySelector("body")
//     login ? body.style.overflow="hidden" : body.style.overflow="visible"  
//    }, [login])

    return(
        <div className="Login" ref={domNode} >
            <div className="xAndLogIn">
                <div id="X" onClick={ e => setLogin(false) }>X</div>
                <div>Login</div>
            </div>

            <div className="WelcomeToNest">Welcome to NEST</div>

            <div className="userNameAndPassword">
                <Input />
            </div>
            
            <div className="privacyPolicy">
                <p> We`ll call or text you to confirm your number. 
                    Standard message and data rates apply. 
                    <a href=""> Privacy Policy</a> 
                </p>
            </div>

            <button className="ContinueButton" type="submit">Continue</button>
            
            <div className="leftLine"></div> 
            <div className="or">or</div> 
            <div className="rightLine"></div>

            <div className="buttonFacebook">
                <FacebookButton />
            </div>

            <div className="buttonGoogle">
                <GoogleButton />
            </div>

            <div className="buttonApple">
                <AppleButton />
            </div>
            
            <div className="buttonEmail">
                <EmailButton />
            </div>
        </div>
    )

}