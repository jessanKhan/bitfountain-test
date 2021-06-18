// Render Prop
import React, { useCallback, useState } from "react"
import { login } from "../../redux/actions/authAction"
import { useDispatch } from "react-redux"
import "./authPage.css"

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const Login = useCallback(
    () => dispatch(login(email, password)),
    [login, email, password]
  )

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h1>Login Form</h1>
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value)
            }}
          />
          <div className="btn btn-success fadeIn fourth" onClick={Login}>
            Login
          </div>
        </form>

        <div id="formFooter"></div>
      </div>
    </div>
  )
}

export default AuthPage
