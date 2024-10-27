import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">News App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                    </li>

                    {/* <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                    </li> */}

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" href="/" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                    </ul>
                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/in">India</Link></li>
                        <li><Link className="dropdown-item" to="/ru">Russia</Link></li>
                        <li><Link className="dropdown-item" to="/jp">Japan</Link></li>
                        <li><Link className="dropdown-item" to="/au">Australia</Link></li>
                        <li><Link className="dropdown-item" to="/us">USA</Link></li>
                    </ul>
                    </li>
                    
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

export default Navbar
