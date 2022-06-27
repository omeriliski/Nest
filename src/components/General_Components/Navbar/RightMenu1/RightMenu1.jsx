import {useContext,useRef, useEffect} from "react";
import { loginContext } from "../../../../Context/LoginContext.jsx";
import { navbarContext } from "../../../../Context/NavbarContext.jsx";
import "./RightMenu1.scss";

const RightMenu1 = () => {
    const {loginModal, setLoginModal, register, setRegister} = useContext(loginContext);
    const {setRightMenu} = useContext(navbarContext);

    const rightMenu1 = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!rightMenu1?.current?.contains(e.target) )
              setRightMenu(false);
        })
      }, [])

      console.log("login-----------------------" + loginModal)
    return(
        <div ref={rightMenu1} className="right-menu1-container">
            <ul>
                <li onClick={ e => { setLoginModal(!loginModal); setRightMenu(false) }}>Log in</li>
                <li onClick={ e => { setRegister(!register); setRightMenu(false)}}>Register</li>
            </ul>
        </div>
    )
}

export default RightMenu1;