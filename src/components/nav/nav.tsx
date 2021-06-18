import React, { useCallback } from "react"
import { Link, NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions/authAction"
const Nav = () => {
  const dispatch = useDispatch()
  const Logout = useCallback(() => dispatch(logout()), [])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/home" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              Product
            </NavLink>
          </li>
        </ul>
        <div className="btn btn-danger float-right" onClick={Logout}>
          Logout
        </div>
      </div>
    </nav>
  )
}

export default Nav
